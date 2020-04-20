class MyCylinder extends THREE.Object3D {
    constructor(radio,resolucion = 30,gui,titleGui) {
      super(gui,titleGui);
      this.createGUI(gui,titleGui);
      this.guiControls.radio = radio;
      this.guiControls.resolution = resolucion;
      this.guiControls.height = 10;

      var cylinderGeom = new THREE.CylinderGeometry (radio,radio,this.guiControls.height,resolucion);
      cylinderGeom.translate(0,this.guiControls.height/2,0);
      var cylinderMat = new THREE.MeshNormalMaterial({opacity:0.35,transparent:true});
      

      this.cilindro = new THREE.Mesh (cylinderGeom, cylinderMat);

      this.add (this.cilindro);


    }
    createGUI (gui,titleGui) {

      this.guiControls = new function () {
        this.radio = 1.0;
        this.height = 10.0;
        this.resolution = 3.0;
        

      } 
      var that = this;

      var folder = gui.addFolder (titleGui);

      folder.add (this.guiControls, 'radio', 1, 10.0, 0.1).name ('Radio : ').listen().onChange(function(radio){
        that.guiControls.radio = radio;
        var newGeo = new THREE.CylinderGeometry(radio,radio,that.guiControls.height,that.guiControls.resolution);
        newGeo.translate(0,that.guiControls.height/2,0);
        that.cilindro.geometry = newGeo;
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
      //if(this.saltarina.position.x < this.guiControls.radio)
        //this.saltarina.position.x += 0.1;
      this.saltarina.update();
    }
  }