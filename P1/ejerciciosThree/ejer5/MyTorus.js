class MyTorus extends THREE.Object3D {
    constructor() {
        super();

        var torusGeom = new THREE.TorusGeometry (0.5,0.3,15,15);

        var torusMat = new THREE.MeshNormalMaterial();
        

        this.toro = new THREE.Mesh (torusGeom, torusMat);


        this.add (this.toro);
    }


    update () {

    }

    getGeometria()
    {
      return this.toro.geometry
    }
}