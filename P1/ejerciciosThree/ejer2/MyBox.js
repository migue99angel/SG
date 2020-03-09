 
class MyBox extends THREE.Object3D {
  constructor(gui,titleGui) {
    super();
    
    // Se crea la parte de la interfaz que corresponde a la caja
    // Se crea primero porque otros métodos usan las variables que se definen para la interfaz
    this.createGUI(gui,titleGui);
    
    // Un Mesh se compone de geometría y material
    var boxGeom = new THREE.BoxGeometry (1,1,1);
    // Como material se crea uno a partir de un color
    var boxMat =  new THREE.MeshNormalMaterial();
    
    // Ya podemos construir el Mesh
    this.box = new THREE.Mesh (boxGeom, boxMat);
    // Y añadirlo como hijo del Object3D (el this)
    this.add (this.box);
    
    // Las geometrías se crean centradas en el origen.
    // Como queremos que el sistema de referencia esté en la base,
    // subimos el Mesh de la caja la mitad de su altura
    this.box.position.y = 0.5;
  }
  
  createGUI (gui,titleGui) {
    // Controles para el tamaño, la orientación y la posición de la caja
    this.guiControls = new function () {
      this.sizeX = 1.0;
      this.sizeY = 1.0;
      this.sizeZ = 1.0;
      
      // Un botón para dejarlo todo en su posición inicial
      // Cuando se pulse se ejecutará esta función.
      this.reset = function () {
        this.sizeX = 1.0;
        this.sizeY = 1.0;
        this.sizeZ = 1.0;
      }
    } 
    var that = this;
    // Se crea una sección para los controles de la caja
    var folder = gui.addFolder (titleGui);
    // Estas lineas son las que añaden los componentes de la interfaz
    // Las tres cifras indican un valor mínimo, un máximo y el incremento
    // El método   listen()   permite que si se cambia el valor de la variable en código, el deslizador de la interfaz se actualice
    folder.add (this.guiControls, 'sizeX', 0.1, 5.0, 0.1).name ('Dimensión X : ').listen().onChange(function(sizeX){
      var newGeo = new THREE.BoxGeometry(sizeX,that.guiControls.sizeY,that.guiControls.sizeZ);
      that.box.geometry = newGeo;
    });
    folder.add (this.guiControls, 'sizeY', 0.1, 5.0, 0.1).name ('Dimensión Y : ').listen().onChange(function(sizeY){
      var newGeo = new THREE.BoxGeometry(that.guiControls.sizeX,sizeY,that.guiControls.sizeZ);
      that.box.geometry = newGeo;
    });
    folder.add (this.guiControls, 'sizeZ', 0.1, 5.0, 0.1).name ('Dimensión Z : ').listen().onChange(function(sizeZ){
      var newGeo = new THREE.BoxGeometry(that.guiControls.sizeX,that.guiControls.sizeY,sizeZ);
      that.box.geometry = newGeo;
    });
    
    folder.add (this.guiControls, 'reset').name ('[ Reset ]');
  }
  
  update () {
    // Con independencia de cómo se escriban las 3 siguientes líneas, el orden en el que se aplican las transformaciones es:
    // Primero, el escalado
    // Segundo, la rotación en Z
    // Después, la rotación en Y
    // Luego, la rotación en X
    // Y por último la traslación
    /*this.position.set (this.guiControls.posX,this.guiControls.posY,this.guiControls.posZ);
    this.rotation.set (this.guiControls.rotX,this.guiControls.rotY,this.guiControls.rotZ);*/
    //this.scale.set (this.guiControls.sizeX,this.guiControls.sizeY,this.guiControls.sizeZ);
    this.box.rotation.y += 0.015;
    this.box.rotation.x += 0.015;
  }
}