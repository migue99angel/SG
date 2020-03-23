 
class MyCone extends THREE.Object3D {
    constructor() {
      super();

      var coneGeom = new THREE.ConeGeometry (0.1,0.2,32);

      var coneMat =  new THREE.MeshNormalMaterial();
      

      this.cono = new THREE.Mesh (coneGeom, coneMat);
      
      this.add (this.cono);

    }
    getGeometria()
    {
      return this.cono.geometry
    }
    
  }