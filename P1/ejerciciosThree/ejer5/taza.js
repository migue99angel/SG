class Taza extends THREE.Object3D {
    constructor() {
      super();

      // Como material se crea uno a partir de un color
      var material = new THREE.MeshNormalMaterial();
      
      var cilindro = new MyCylinder(1);
      var toro = new MyTorus();
      var cilindroChico = new MyCylinder(0.9);
      
      var geometriaCilindorChico = cilindroChico.getGeometria();
      geometriaCilindorChico.translate(0,0.1,0);
      var geometriaToro = toro.getGeometria();
      geometriaToro.translate(1,0,0);

      var cilindroBSP = new ThreeBSP (cilindro.getGeometria());
      var toroBSP = new ThreeBSP (geometriaToro);
      var chicoBSP = new ThreeBSP (geometriaCilindorChico);
  
      var partialResult = cilindroBSP.union(toroBSP);
      var finalResult = partialResult.union(chicoBSP);

  
      var resultado = finalResult.toMesh(material);
      resultado.geometry.computeFaceNormals();
      resultado.geometry.computeVertexNormals();

      this.add(resultado);
    }

}