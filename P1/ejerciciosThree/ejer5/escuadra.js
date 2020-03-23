class Escuadra extends THREE.Object3D {
    constructor() {
      super();

      // Como material se crea uno a partir de un color
      var material = new THREE.MeshNormalMaterial();
      
      var cajaVertical = new MyBox();
      var cajaHorizontal = new MyBox();
      var miniCono = new MyCone();
      var cilindro = new MyCylinder(0.09);
      
      
      var geometricaHorizontal = cajaVertical.getGeometria();
      geometricaHorizontal.scale(0.1,1,0.5);
      geometricaHorizontal.translate(0.5,0,0);

      var geometricaVertical = cajaHorizontal.getGeometria();
      geometricaVertical.scale(1,0.1,0.5);
      geometricaVertical.translate(0,-0.448,0);

      var geometriaMiniCono = miniCono.getGeometria();
      geometriaMiniCono.translate(0.0,0.4,0);
      geometriaMiniCono.rotateX(3.14);

      var geometriaCilindro = cilindro.getGeometria();
      geometriaCilindro.translate(0.37,-0.35,0.32)
      geometriaCilindro.rotateX(3.14/2);
      

      var horizontalBSP = new ThreeBSP (geometricaHorizontal);
      var verticalBSP = new ThreeBSP (geometricaVertical);
      var union = new ThreeBSP (geometriaCilindro);
      var agujero = new ThreeBSP (geometriaMiniCono);


      var partialResult = horizontalBSP.union(verticalBSP);
      var partial2 = partialResult.subtract(union);
      var partial3 = partial2.subtract(agujero);

      var geometriaMiniCono2 = miniCono.getGeometria();
      geometriaMiniCono2.rotateZ(3.14/2);
      geometriaMiniCono2.translate(0.07,0.0,0.0);
      

      var agujero2 = new ThreeBSP (geometriaMiniCono2);
      var finalResult = partial3.subtract(agujero2);

  
      var resultado = finalResult.toMesh(material);
      resultado.geometry.computeFaceNormals();
      resultado.geometry.computeVertexNormals();

      this.add(resultado);
    }

}