class MyTorus extends THREE.Object3D {
    constructor(radius = 0.5,tube = 0.3,radialSegments = 15,tubularSegments=15) {
        super();

        var torusGeom = new THREE.TorusGeometry (radius,tube,radialSegments,tubularSegments);

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