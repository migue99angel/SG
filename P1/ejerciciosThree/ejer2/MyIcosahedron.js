class MyIcosahedron extends THREE.Object3D {
    constructor(gui,titleGui) {
      super();
      
      // Se crea la parte de la interfaz que corresponde a el cono
      // Se crea primero porque otros métodos usan las variables que se definen para la interfaz
      this.createGUI(gui,titleGui);
      
      // Un Mesh se compone de geometría y material
      var IcosahedronGeom = new THREE.IcosahedronGeometry (1,0);
      // Como material se crea uno a partir de un color
      var IcosahedronMat = new THREE.MeshNormalMaterial();
      
      // Ya podemos construir el Mesh
      this.icosaedro = new THREE.Mesh (IcosahedronGeom, IcosahedronMat);
      // Y añadirlo como hijo del Object3D (el this)
      this.add (this.icosaedro);
      
      // Las geometrías se crean centradas en el origen.
      // Como queremos que el sistema de referencia esté en la base,
      // subimos el Mesh de el cono la mitad de su altura
      this.icosaedro.position.y = -5.0;
      this.icosaedro.position.x = -5.0;
    }
        
    createGUI (gui,titleGui) {
        // Controles para el tamaño, la orientación y la posición de el cono
        this.guiControls = new function () {
          this.radio = 1.0;
          this.detalle = 0.0;
  
          
          // Un botón para dejarlo todo en su posición inicial
          // Cuando se pulse se ejecutará esta función.
          this.reset = function () {
            this.radio = 1.0;
            this.detalle = 0.0;
  
          }
        } 
        var that = this
        // Se crea una sección para los controles de el cono
        var folder = gui.addFolder (titleGui);
        // Estas lineas son las que añaden los componentes de la interfaz
        // Las tres cifras indican un valor mínimo, un máximo y el incremento
        // El método   listen()   permite que si se cambia el valor de la variable en código, el deslizador de la interfaz se actualice
        folder.add (this.guiControls, 'radio', 1.0, 20.0, 1.0).name ('Radio: ').listen().onChange(function(radio){
          var newGeo = new THREE.IcosahedronGeometry(radio,that.guiControls.detalle);
          that.icosaedro.geometry = newGeo;
        });
        folder.add (this.guiControls, 'detalle', 0.0, 3.0, 1.0).name ('Detalle: ').listen().onChange(function(detalle){
          var newGeo = new THREE.IcosahedronGeometry(that.guiControls.radio,detalle);
          that.icosaedro.geometry = newGeo;
        });
      }
      update () {
        this.icosaedro.rotation.y += 0.015;
        this.icosaedro.rotation.x += 0.015;
      }
}