class MySphere extends THREE.Object3D {
    constructor(radio,text) {
        super();

        var sphereGeom = new THREE.SphereGeometry (radio,32,32,3);
        var texture = new THREE.TextureLoader().load(text);
        var sphererMat = new THREE.MeshPhongMaterial ({map: texture});
        

        this.esfera = new THREE.Mesh (sphereGeom, sphererMat);

        this.add (this.esfera);
      }
      getGeometria()
      {
        return this.esfera.geometry
      }

      
}