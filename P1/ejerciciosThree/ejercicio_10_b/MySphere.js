class MySphere extends THREE.Object3D {
    constructor(radio,cilindro) {
        super();

        this.sphereGeom = new THREE.SphereGeometry (radio,32,32,3);

        var sphererMat = new THREE.MeshNormalMaterial();

        this.cilindro = cilindro;

        this.sphereGeom.translate(this.cilindro.getRadio(),radio,0);
        
        this.esfera = new THREE.Mesh (this.sphereGeom, sphererMat);
        this.nodoEsfera = new THREE.Object3D();
        this.nodoEsfera.add(this.esfera);
        this.add (this.nodoEsfera);
        this.add(this.cilindro);
        this.radio = radio;
        this.avance = 0;
        this.arriba = false;
        this.altura = this.cilindro.getAltura();
        this.tiempoAnterior = Date.now();
        this.velocidad = 0.01;
        this.velocidadHelice = 0.001;
        this.posAnterior = this.cilindro.getRadio()
      }

      update()
      {
        if(this.posAnterior != this.cilindro.getRadio())
        {
          this.posAnterior = this.cilindro.getRadio();
          this.esfera.position.set((this.posAnterior)/2,this.radio,0);
        }
        var tiempoActual = Date.now();
        if(this.avance < (this.altura-this.radio) && !this.arriba )
        {
          this.nodoEsfera.position.y += this.velocidad * (tiempoActual-this.tiempoAnterior);
          this.avance += this.velocidad * (tiempoActual-this.tiempoAnterior);
          this.nodoEsfera.rotation.y += this.velocidadHelice * (tiempoActual-this.tiempoAnterior);
        }
        if(this.avance >= (this.altura-this.radio) && !this.arriba )
          this.arriba = true;
        
        if(this.arriba && this.avance > 0)  
        {
          this.nodoEsfera.position.y -= this.velocidad * (tiempoActual-this.tiempoAnterior);
          this.avance -= this.velocidad * (tiempoActual-this.tiempoAnterior);
          this.nodoEsfera.rotation.y += this.velocidadHelice * (tiempoActual-this.tiempoAnterior);
        }

        if(this.avance <= 0 && this.arriba )
          this.arriba = false;

          this.tiempoAnterior = tiempoActual;
      }

      getGeometria()
      {
        return 
      }

      
}