class Pendulo extends THREE.Object3D {
    
    constructor(gui,titleGui) {
        super();
        var caja = new MyBox();
        var material = new THREE.MeshNormalMaterial();
        var otroMatreial = new THREE.MeshPhongMaterial();
        this.createGUI(gui,titleGui);

        var geometriaCajaA1 = new THREE.BoxGeometry(1,1,1);
        geometriaCajaA1.translate(0,-0.75,0);
        var meshCajaA1 = new THREE.Mesh (geometriaCajaA1, material);
        meshCajaA1.scale.y = this.guiControls.alturaPenduloPrin;
        meshCajaA1.scale.y = 2;

        var nodoA1 = new THREE.Object3D();
        nodoA1.add(meshCajaA1); //Probar a crear el object 3d

        var geometriaCajaA2 = new THREE.BoxGeometry(1,1,1);
        geometriaCajaA2.translate(0,-0.5,0);
        var meshCajaA2 = new THREE.Mesh (geometriaCajaA2, otroMatreial);
        var nodoA2 = new THREE.Object3D();
        nodoA2.add(meshCajaA2);
        nodoA2.position.y = -this.guiControls.alturaPenduloPrin;
        //nodoA2.position.y = -2.5


        var geometriaCajaA4 =  new THREE.BoxGeometry(1,1,1);
        var meshCajaA4 = new THREE.Mesh (geometriaCajaA4, otroMatreial);
        var nodoA4 = meshCajaA4;
        //Añadir hexágono
        var hexaGr = new MyCylinder();
        hexaGr.rotateX(3.14/2);
        hexaGr.position.z = 0.5;
        


        //Péndulo pequeño
        var geometriaCajaB1 = new THREE.BoxGeometry(0.5,1,0.5);
        geometriaCajaB1.translate(0,-0.75,0.75);
        var meshCajaB1 = new THREE.Mesh (geometriaCajaB1, this.otroMatreial);
        // meshCajaA1.scale.y = this.guiControls.alturaPenduloPrin;
        meshCajaB1.scale.y = 2;
        var nodoB1 = meshCajaB1;

        var hexa = new MyCylinder();
        hexa.rotateX(3.14/2);
        hexa.position.z = 1;
        hexa.position.y = -0.75;
        var nodoB2 = hexa;



        var nodoA3 = new THREE.Object3D();
        nodoA3.add(nodoA1);
        nodoA3.add(nodoA2);

        var nodoA5 = new THREE.Object3D();
        nodoA5.add(nodoA3);
        nodoA5.add(nodoA4);
        nodoA5.add(hexaGr);

        var nodoB3 = new THREE.Object3D();
        nodoB3.add(nodoB1);
        nodoB3.add(nodoB2);

        this.nodoPendulo = new THREE.Object3D();
        this.nodoPendulo.add(nodoA5);
        this.nodoPendulo.add(nodoB3);

        this.add(this.nodoPendulo);
        //console.log(this.nodoPendulo.children[0].children[0].children[0]);

    }
    createGUI (gui,titleGui) {
        this.guiControls = new function () {
          this.alturaPenduloPrin = 2.0;
          this.alturaPenduloChcico = 1.0;
          this.rotacionPrin = 0.0;
          this.rotacionChico = 0.0;
        } 

        
        // Se crea una sección para los controles del pendulo
        var folder = gui.addFolder (titleGui);

        var that = this;

        folder.add (this.guiControls, 'alturaPenduloPrin', 0.1, 5.0, 0.1).name ('Altura  : ').listen().onChange(function(alturaPenduloPrin){
          //var geometriaCajaA1 = new THREE.BoxGeometry(1,alturaPenduloPrin,1);
          //that.nodoPendulo.getObjectById(0).getObjectById(0).getObjectById(0).scale.y = alturaPenduloPrin; 
          // console.log(that.nodoPendulo.children[0]);
          // console.log(that.nodoPendulo.children[0].children[0]);
          // console.log(that.nodoPendulo.children[0].children[0].children[0].children[0]);
          var p = new THREE.BoxGeometry(1,alturaPenduloPrin,1);
          p.translate(0,-0.75,0);
          that.nodoPendulo.children[0].children[0].children[0].children[0].geometry = p;
          that.nodoPendulo.children[0].children[0].children[0].position.set(0,-0.75,0);
          // that.nodoPendulo.children[0].children[0].children[0].position.y = 1;
        });


        folder.add (this.guiControls, 'rotacionPrin', -0.8, 0.8, 0.001).name ('Rotacion  : ').listen().onChange(function(rotacionPrin){
          that.nodoPendulo.rotateZ(rotacionPrin);
        });

        folder.add (this.guiControls, 'rotacionChico', -0.8, 0.8, 0.001).name ('Rotacion Pequeño : ').listen().onChange(function(rotacionChico){
          that.nodoPendulo.children[1].translate(0,0,0);
          that.nodoPendulo.children[1].rotateZ(rotacionChico);
          that.nodoPendulo.children[1].translate(0,-0.75,0.75);
        });
        
      }

    update(){}
}