class Pendulo extends THREE.Object3D {
    
  constructor(gui,titleGui) {
      super();
      var caja = new MyBox();
      var material = new THREE.MeshNormalMaterial();
      var otroMatreial = new THREE.MeshPhongMaterial();
      this.createGUI(gui,titleGui);

      var geometriaCajaA1 = new THREE.BoxGeometry(1,1,1);
      
      //--------------- cambio
//         geometriaCajaA1.translate(0,-0.75,0);
      // Profe: Si la altura es 1, la traslación tendría que ser la mitad
      geometriaCajaA1.translate(0,-0.5,0);
      //----------------
      
      var meshCajaA1 = new THREE.Mesh (geometriaCajaA1, material);
      meshCajaA1.scale.y = this.guiControls.alturaPenduloPrin;
      meshCajaA1.scale.y = 2;
      
      //----------- cambio
      this.meshCajaA1ref = meshCajaA1;
      //--------------

      var nodoA1 = new THREE.Object3D();
      nodoA1.add(meshCajaA1); //Probar a crear el object 3d

      var geometriaCajaA2 = new THREE.BoxGeometry(1,1,1);
      geometriaCajaA2.translate(0,-0.5,0);
      var meshCajaA2 = new THREE.Mesh (geometriaCajaA2, otroMatreial);
      this.meshCajaA2ref = meshCajaA2;
      var nodoA2 = new THREE.Object3D();
      nodoA2.add(meshCajaA2);
      nodoA2.position.y = -this.guiControls.alturaPenduloPrin;



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
      this.nodoB3Ref = nodoB3;

      this.nodoPendulo = new THREE.Object3D();
      this.nodoPendulo.add(nodoA5);
      this.nodoPendulo.add(nodoB3);

      this.add(this.nodoPendulo);

  }
  createGUI (gui,titleGui) {
      this.guiControls = new function () {
        this.alturaPenduloPrin = 2.0;
        this.alturaPenduloChcico = 1.0;
        this.rotacionPrin = 0.0;
        this.rotacionChico = 0.0;
        this.posicion = 0.0;
      } 

      
      // Se crea una sección para los controles del pendulo
      var folder = gui.addFolder (titleGui);

      var that = this;

      folder.add (this.guiControls, 'alturaPenduloPrin', 0.1, 5.0, 0.1).name ('Altura  : ').listen().onChange(function(alturaPenduloPrin){
        that.meshCajaA1ref.scale.y = alturaPenduloPrin;
        that.meshCajaA2ref.position.y = -alturaPenduloPrin + 2;
      });


      folder.add (this.guiControls, 'rotacionPrin', -0.1, 0.1, 0.01).name ('Rotacion  : ').listen().onChange(function(rotacionPrin){
        that.nodoPendulo.rotateZ(rotacionPrin);
      });

      folder.add (this.guiControls, 'rotacionChico', -0.1, 0.1, 0.01).name ('Rotacion Pequeño : ').listen().onChange(function(rotacionChico){
        that.nodoB3Ref.rotateZ(rotacionChico);
      });

      folder.add (this.guiControls, 'posicion', 0.0, 1.0, 0.01).name ('Posicion (%): ').listen().onChange(function(posicion){
        that.nodoB3Ref.position.y = 1-that.guiControls.alturaPenduloPrin*posicion;
      });
      
    }

  update(){}
}
