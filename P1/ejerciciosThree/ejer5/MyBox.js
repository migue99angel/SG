 
class MyBox extends THREE.Object3D {
  constructor() {
    super();
    
    var boxGeom = new THREE.BoxGeometry (1,1,1);

    var boxMat =  new THREE.MeshNormalMaterial();
    
    this.box = new THREE.Mesh (boxGeom, boxMat);

    this.add (this.box);
    
  }

  getGeometria()
  {
    return this.box.geometry
  }
}