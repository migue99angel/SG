class Taza extends THREE.Object3D {
    constructor() {
      super();

      // Como material se crea uno a partir de un color
      var material = new THREE.MeshNormalMaterial();
      
      var cilindro = new MyCylinder(1,30,2);
      var toro = new MyTorus();
      var cilindroChico = new MyCylinder(0.9,30,2);
      
      var geometriaCilindorChico = cilindroChico.getGeometria();
      geometriaCilindorChico.translate(0,0.1,0);
      var geometriaToro = toro.getGeometria();
      geometriaToro.translate(1,0,0);

      var cilindroBSP = new ThreeBSP (cilindro.getGeometria());
      var toroBSP = new ThreeBSP (geometriaToro);
      var chicoBSP = new ThreeBSP (geometriaCilindorChico);
  
      var partialResult = cilindroBSP.union(toroBSP);
      var finalResult = partialResult.subtract(chicoBSP);

  
      this.resultado = finalResult.toMesh(material);
      this.resultado.geometry.computeFaceNormals();
      this.resultado.geometry.computeVertexNormals();

      this.add(this.resultado);
    }
    update()
    {
      this.resultado.rotation.y += 0.01
      this.resultado.rotation.x += 0.01
    }
}