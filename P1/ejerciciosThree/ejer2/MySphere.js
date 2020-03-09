class MySphere extends THREE.Object3D {
    constructor(gui,titleGui) {
        super();
        
        // Se crea la parte de la interfaz que corresponde a el cono
        // Se crea primero porque otros métodos usan las variables que se definen para la interfaz
        this.createGUI(gui,titleGui);
        
        // Un Mesh se compone de geometría y material
        var sphereGeom = new THREE.SphereGeometry (1,1,1,3);
        // Como material se crea uno a partir de un color
        var sphererMat = new THREE.MeshNormalMaterial();
        
        // Ya podemos construir el Mesh
        this.esfera = new THREE.Mesh (sphereGeom, sphererMat);
        // Y añadirlo como hijo del Object3D (el this)
        this.add (this.esfera);
        
        // Las geometrías se crean centradas en el origen.
        // Como queremos que el sistema de referencia esté en la base,
        // subimos el Mesh de el cono la mitad de su altura
        this.esfera.position.y = -5.0;
        this.esfera.position.x = 0;
      }
      createGUI (gui,titleGui) {
        // Controles para el tamaño, la orientación y la posición de el cono
        this.guiControls = new function () {
          this.radius = 1.0;
          this.widthSegments = 3.0;
          this.heightSegments = 2.0;
          
          // Un botón para dejarlo todo en su posición inicial
          // Cuando se pulse se ejecutará esta función.
          this.reset = function () {
            this.radius = 1.0;
            this.widthSegments = 3.0;
            this.heightSegments = 2.0;
          }
        } 
        var that = this;
        // Se crea una sección para los controles de el cono
        var folder = gui.addFolder (titleGui);
        // Estas lineas son las que añaden los componentes de la interfaz
        // Las tres cifras indican un valor mínimo, un máximo y el incremento
        // El método   listen()   permite que si se cambia el valor de la variable en código, el deslizador de la interfaz se actualice
        folder.add (this.guiControls, 'radius', 1.0, 5.0, 1.0).name ('Radio : ').listen().onChange(function(radius){
            var newGeo = new THREE.SphereGeometry(radius,that.guiControls.widthSegments,that.guiControls.heightSegments);
            that.esfera.geometry = newGeo;
        });
        folder.add (this.guiControls, 'widthSegments', 3.0, 20.0, 1.0).name ('Res. Ecuador: ').listen().onChange(function(widthSegments){
            var newGeo = new THREE.SphereGeometry(that.guiControls.radius,widthSegments,that.guiControls.heightSegments);
            that.esfera.geometry = newGeo;
        });
        folder.add (this.guiControls, 'heightSegments', 2.0, 20.0, 1.0).name ('Res. Meridiano : ').listen().onChange(function(heightSegments){
            var newGeo = new THREE.SphereGeometry(that.guiControls.radius,that.guiControls.widthSegments,heightSegments);
            that.esfera.geometry = newGeo;
        });

   
      }
      update () {
        this.esfera.rotation.y += 0.015;
        this.esfera.rotation.x += 0.015;
      }
      
}