class Tuerca extends THREE.Object3D
{
    constructor()
    {
      super();

      var material = new THREE.MeshNormalMaterial();

      var prismaHexagonal = new MyCylinder(1.05,6,1);
      var cilindroHueco = new MyCylinder(0.6,30,1);
      
      var esfera = new MySphere(1.05);
      var esfera = new MySphere(1.08);


      var toro = new MyTorus(0.59,0.05);
      
      

      var geometriaPrisma = prismaHexagonal.getGeometria();


      var geometriaHueco = cilindroHueco.getGeometria();


      var geometriaEsfera = esfera.getGeometria();

      var geometriaToro = toro.getGeometria();
      geometriaToro.rotateX(Math.PI/2);
      geometriaToro.translate(0,-0.475,0);
      
      var prismaBSP = new ThreeBSP (geometriaPrisma);
      var huecoBSP = new ThreeBSP (geometriaHueco);
      var esferaBSP = new ThreeBSP (geometriaEsfera);
      var toroBSP = new ThreeBSP (geometriaToro);

      var parcial = prismaBSP.intersect(esferaBSP);
      var parcial2 = parcial.subtract(huecoBSP);
      
      // Sección de la rosca
      var finalResult = parcial2.subtract(toroBSP);
      var aux = -0.45;
      var aux2 = 0.15;
      while(aux <= 0.475)
      {
        geometriaToro.translate(0,aux2,0);
        var toroBSP = new ThreeBSP (geometriaToro);
        finalResult = finalResult.subtract(toroBSP);
        aux = aux + aux2;
      }


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