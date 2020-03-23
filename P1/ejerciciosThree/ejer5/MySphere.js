class MySphere extends THREE.Object3D {
    constructor(radio) {
        super();

        var sphereGeom = new THREE.SphereGeometry (radio,50,50,3);

        var sphererMat = new THREE.MeshNormalMaterial();
        

        this.esfera = new THREE.Mesh (sphereGeom, sphererMat);

        this.add (this.esfera);
      }
      getGeometria()
      {
        return this.esfera.geometry
      }
      posicionar(x)
      {
        this.esfera.position.y = x;
      }

      
}