class Satelites extends THREE.Object3D {
    constructor() 
    {
      super();
      this.tierra = new MySphere(1,'../imgs/tierra.jpg')

      this.satelite1 = new MySphere(1,'../imgs/cara.jpg');
      this.nodoSatelite1 = new THREE.Object3D();
      this.nodoSatelite1.add(this.satelite1);

      this.satelite2 = new MySphere(1,'../imgs/cara.jpg');
      this.nodoSatelite2 = new THREE.Object3D();
      this.nodoSatelite2.add(this.satelite2);


      this.satelite3 = new MySphere(1,'../imgs/cara.jpg');
      this.nodoSatelite3 = new THREE.Object3D();
      this.nodoSatelite3.add(this.satelite3);

      this.add(this.tierra);
      this.add(this.nodoSatelite1);
      this.add(this.nodoSatelite2);
      this.add(this.nodoSatelite3);


      var origen = {x : 0, y : 0 , z : 5, translacion : 0 , rotacion : -(1/2.5)*Math.PI, tierra : -(1.3)-Math.PI, x2:0, y2: 0, z2: 10, rotacion2 :Math.PI +(7/4)*Math.PI, x3:0, y3: 0, z3: 15, rotacion3 : 0 } ;
      var destino = {x : 5, y : 0 , z : 0, translacion : 2*Math.PI - (1/2)*Math.PI , rotacion : 1/10*Math.PI,tierra: Math.PI-1.3, x2:10, y2: 0, z2: 0 , rotacion2 : (7/4)*Math.PI- Math.PI/2, x3:15, y3: 0, z3: 0, rotacion3 :(3/4)*Math.PI};
      var that = this;

     
      this.movimiento = new TWEEN.Tween (origen).to(destino,5000)
        .repeat(Infinity)
        .onUpdate(function(){
          that.satelite1.position.set(origen.x,origen.y,origen.z);
          that.satelite1.rotation.y  = origen.rotacion; 
          that.nodoSatelite1.rotation.y = origen.translacion;
          that.tierra.rotation.y = origen.tierra;

          that.satelite2.position.set(origen.x2,origen.y2,origen.z2);
          that.satelite2.rotation.y  = origen.rotacion2; 
          that.nodoSatelite2.rotation.y = origen.translacion;
          //Este es el satelite al que me refiero
          that.satelite3.position.set(origen.x3,origen.y3,origen.z3);
          that.satelite3.rotation.y  = origen.rotacion3; 
          that.nodoSatelite3.rotation.y = origen.translacion;
        })
        .start();
    }

      update()
      {
        TWEEN.update();
      }
}