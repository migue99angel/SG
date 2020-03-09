class MyTorus extends THREE.Object3D {
    constructor(gui,titleGui) {
        super();
        
        // Se crea la parte de la interfaz que corresponde a el cono
        // Se crea primero porque otros métodos usan las variables que se definen para la interfaz
        this.createGUI(gui,titleGui);
        
        // Un Mesh se compone de geometría y material
        var torusGeom = new THREE.TorusGeometry (1,0.4,8,6);
        // Como material se crea uno a partir de un color
        var torusMat = new THREE.MeshNormalMaterial();
        
        // Ya podemos construir el Mesh
        this.toro = new THREE.Mesh (torusGeom, torusMat);
        // Y añadirlo como hijo del Object3D (el this)
        this.add (this.toro);
        
        // Las geometrías se crean centradas en el origen.
        // Como queremos que el sistema de referencia esté en la base,
        // subimos el Mesh de el cono la mitad de su altura
        this.toro.position.y = -5.0;
        this.toro.position.x = 5.0;
    }
    createGUI (gui,titleGui) {
        // Controles para el tamaño, la orientación y la posición de el cono
        this.guiControls = new function () {
          this.radius = 1.0;
          this.tube = 0.4;
          this.radialSegments = 3.0;
          this.tubularSegments = 3.0;
          
          // Un botón para dejarlo todo en su posición inicial
          // Cuando se pulse se ejecutará esta función.
          this.reset = function () {
            this.radius = 1.0;
            this.tube = 0.4;
            this.radialSegments = 3.0;
            this.tubularSegments = 3.0;
          }
        } 
        var that = this;
        // Se crea una sección para los controles de el cono
        var folder = gui.addFolder (titleGui);
        // Estas lineas son las que añaden los componentes de la interfaz
        // Las tres cifras indican un valor mínimo, un máximo y el incremento
        // El método   listen()   permite que si se cambia el valor de la variable en código, el deslizador de la interfaz se actualice
        folder.add (this.guiControls, 'radius', 1.0, 5.0, 0.1).name ('Radio : ').listen().onChange(function(radius){
            var newGeo = new THREE.TorusGeometry(radius,that.guiControls.tube,that.guiControls.radialSegments,that.guiControls.tubularSegments);
            that.toro.geometry = newGeo;
        });
        folder.add (this.guiControls, 'tube', 0.2, 1.0, 0.1).name ('Radio Tubo : ').listen().onChange(function(tube){
            var newGeo = new THREE.TorusGeometry(that.guiControls.radius,tube,that.guiControls.radialSegments,that.guiControls.tubularSegments);
            that.toro.geometry = newGeo;
        });
        folder.add (this.guiControls, 'radialSegments', 3.0, 15.0, 1.0).name ('Resolución Toro : ').listen().onChange(function(radialSegments){
            var newGeo = new THREE.TorusGeometry(that.guiControls.radius,that.guiControls.tube,radialSegments,that.guiControls.tubularSegments);
            that.toro.geometry = newGeo;
        });
        folder.add (this.guiControls, 'tubularSegments', 3.0, 15.0, 1.0).name ('Resolución Tubo : ').listen().onChange(function(tubularSegments){
            var newGeo = new THREE.TorusGeometry(that.guiControls.radius,that.guiControls.tube,that.guiControls.that.guiControls.radialSegments,tubularSegments);
            that.toro.geometry = newGeo;
        });

   
      }

    update () {
        this.toro.rotation.y += 0.015;
        this.toro.rotation.x += 0.015;
    }
}