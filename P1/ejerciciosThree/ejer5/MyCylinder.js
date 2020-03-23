class MyCylinder extends THREE.Object3D {
    constructor(radio) {
      super();


      var cylinderGeom = new THREE.CylinderGeometry (radio,radio,2,30);

      var cylinderMat = new THREE.MeshNormalMaterial();
      

      this.cilindro = new THREE.Mesh (cylinderGeom, cylinderMat);

      this.add (this.cilindro);

    }

    getGeometria()
    {
      return this.cilindro.geometry
    }
  }