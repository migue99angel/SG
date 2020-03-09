class MyCylinder extends THREE.Object3D {
    constructor(gui,titleGui) {
      super();
      
      // Se crea la parte de la interfaz que corresponde a el cono
      // Se crea primero porque otros métodos usan las variables que se definen para la interfaz
      this.createGUI(gui,titleGui);
      
      // Un Mesh se compone de geometría y material
      var cylinderGeom = new THREE.CylinderGeometry (1,1,1,3);
      // Como material se crea uno a partir de un color
      var cylinderMat = new THREE.MeshNormalMaterial();
      
      // Ya podemos construir el Mesh
      this.cilindro = new THREE.Mesh (cylinderGeom, cylinderMat);
      // Y añadirlo como hijo del Object3D (el this)
      this.add (this.cilindro);
      
      // Las geometrías se crean centradas en el origen.
      // Como queremos que el sistema de referencia esté en la base,
      // subimos el Mesh de el cono la mitad de su altura
      this.cilindro.position.y = 0.5;
      this.cilindro.position.x = -10;
    }
    
    createGUI (gui,titleGui) {
      // Controles para el tamaño, la orientación y la posición de el cono
      this.guiControls = new function () {
        this.radiusTop = 1.0;
        this.radiusBottom = 1.0;
        this.height = 1.0;
        this.resolution = 3.0;
        
        // Un botón para dejarlo todo en su posición inicial
        // Cuando se pulse se ejecutará esta función.
        this.reset = function () {
          this.radiusTop = 1.0;
          this.radiusBottom = 1.0;
          this.height = 1.0;
          this.resolution = 3.0;
        }
      } 
      var that = this;
      // Se crea una sección para los controles de el cono
      var folder = gui.addFolder (titleGui);
      // Estas lineas son las que añaden los componentes de la interfaz
      // Las tres cifras indican un valor mínimo, un máximo y el incremento
      // El método   listen()   permite que si se cambia el valor de la variable en código, el deslizador de la interfaz se actualice
      folder.add (this.guiControls, 'radiusTop', 0.1, 5.0, 0.1).name ('Radio Superior : ').listen().onChange(function(radiusTop){
        var newGeo = new THREE.CylinderGeometry(radiusTop,that.guiControls.radiusBottom,that.guiControls.height,that.guiControls.resolution);
        that.cilindro.geometry = newGeo;
      });
      folder.add (this.guiControls, 'radiusBottom', 0.1, 5.0, 0.1).name ('Radio Inferior : ').listen().onChange(function(radiusBottom){
        var newGeo = new THREE.CylinderGeometry(that.guiControls.radiusTop,radiusBottom,that.guiControls.height,that.guiControls.resolution);
        that.cilindro.geometry = newGeo;
      });
      folder.add (this.guiControls, 'height', 0.1, 5.0, 0.1).name ('Altura: ').listen().onChange(function(height){
        var newGeo = new THREE.CylinderGeometry(that.guiControls.radiusTop,that.guiControls.radiusBottom,height,that.guiControls.resolution);
        that.cilindro.geometry = newGeo;
      });
      
      folder.add (this.guiControls, 'resolution', 3.0, 20.0, 1.0).name ('Resolución : ').listen().onChange(function(resolution){
        var newGeo = new THREE.CylinderGeometry(that.guiControls.radiusTop,that.guiControls.radiusBottom,that.guiControls.height,resolution);
        that.cilindro.geometry = newGeo;
      });
 
    }
    
    update () {
      // Con independencia de cómo se escriban las 3 siguientes líneas, el orden en el que se aplican las transformaciones es:
      // Primero, el escalado
      // Segundo, la rotación en Z
      // Después, la rotación en Y
      // Luego, la rotación en X
      // Y por último la traslación
      //this.position.set (this.guiControls.posX,this.guiControls.posY,this.guiControls.posZ);
      //this.rotation.set (this.guiControls.rotX,this.guiControls.rotY,this.guiControls.rotZ);
      //this.scale.set (this.guiControls.sizeX,this.guiControls.sizeY,this.guiControls.sizeZ);
      this.cilindro.rotation.y += 0.015;
      this.cilindro.rotation.x += 0.015;
    }
  }