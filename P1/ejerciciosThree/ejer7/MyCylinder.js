class MyCylinder extends THREE.Object3D {
    constructor(radio = 0.2,resolucion = 6,altura=0.15) {
      super();


      var cylinderGeom = new THREE.CylinderGeometry (radio,radio,altura,resolucion);

      var cylinderMat = new THREE.MeshNormalMaterial();

      this.cilindro = new THREE.Mesh (cylinderGeom, cylinderMat);
      
      this.add (this.cilindro);

    }

    getGeometria()
    {
      return this.cilindro.geometry
    }
  }