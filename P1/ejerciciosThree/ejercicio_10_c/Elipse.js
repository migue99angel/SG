class Elipse extends THREE.Object3D {
  constructor(radio,resolucion = 30,gui,titleGui) {
      super(gui,titleGui);
      this.createGUI(gui,titleGui);
      
      this.guiControls.radioMayor = radio;
      this.guiControls.radioMenor = radio;
      this.guiControls.resolution = resolucion;
      this.guiControls.height = 2;

      var cylinderGeom = new THREE.CylinderGeometry (radio,radio,this.guiControls.height,resolucion);
      cylinderGeom.translate(0,this.guiControls.height/2,0);
      var cylinderMat = new THREE.MeshNormalMaterial({opacity:0.35,transparent:true});
      

      this.cilindro = new THREE.Mesh (cylinderGeom, cylinderMat);

      this.add (this.cilindro);

      this.sphereGeom = new THREE.SphereGeometry (1,32,32,3);

      var sphererMat = new THREE.MeshNormalMaterial();

      
      this.esfera = new THREE.Mesh (this.sphereGeom, sphererMat);
      this.esfera.position.set(this.guiControls.radioMayor,0.5,0);
      this.nodoEsfera = new THREE.Object3D();
      this.nodoEsfera.add(this.esfera);
      this.nodoEmpujador = new THREE.Object3D();
      this.nodoEmpujador.add(this.nodoEsfera);

      this.add (this.nodoEmpujador);

      this.radio = radio;
      this.altura = this.getAltura();

      this.posAnterior = this.getRadio()

      var origen = {translacion : 0 } ;
      var destino = {translacion : 2*Math.PI };
      var that = this;
      this.animacion = new TWEEN.Tween (origen).to(destino,4000)
        .repeat(Infinity)
        .onUpdate(function(){
          that.nodoEsfera.rotation.y = origen.translacion;
        })


      var origen2 = { x :1  } ;
      var destino2 = { x :-1 };
      this.empujador = new TWEEN.Tween (origen2).to(destino2,2000)
        .repeat(Infinity)
        .yoyo(true) 
        .easing(TWEEN.Easing.Quadratic.InOut)   
        .onUpdate(function(){
            that.nodoEmpujador.position.x =  (origen2.x * that.guiControls.extension) ;
        })





      this.animacion.start();
      this.empujador.start();

  }
  createGUI (gui,titleGui) {

    this.guiControls = new function () {
      this.radioMayor = 1.0;
      this.radioMenor = 1.0;
      this.height = 10.0;
      this.resolution = 30.0;
      this.extension = 0.0;
      this.radio = 1.0;
      

    } 
    var that = this;

    var folder = gui.addFolder (titleGui);

    folder.add (this.guiControls, 'extension', 0.0, 20.0, 0.1).name ('Extension : ').listen().onChange(function(extension){
      that.guiControls.extension = extension;
      that.guiControls.radioMayor = that.guiControls.radioMenor + that.guiControls.extension


      that.cilindro.scale.x = that.guiControls.radioMayor/that.guiControls.radioMenor;

    });


  }
  getGeometria()
  {
    return this.cilindro.geometry;
  }
  getRadio()
  {
    return this.guiControls.radio;
  }
  getAltura()
  {
    return this.guiControls.height;
  }
  update()
  {
    TWEEN.update();
  }

}