class Reloj extends THREE.Object3D {
    constructor(gui,titleGui) {
        super();
        this.createGUI(gui,titleGui);
        this.aguja = new MySphere();
        this.aguja.position.set(9.0,0.0,0.0);
        this.nodoAguja = new THREE.Object3D();
        this.nodoAguja.add(this.aguja);
        this.generarHoras();
        this.add(this.nodoAguja)
      }

      update()
      {
        this.aguja.rotation.y += this.guiControls.velocidad;
        this.nodoAguja.rotation.y +=this.guiControls.velocidad;
      }

      generarHoras()
      {
        var esfera1 = new MySphere();
        esfera1.position.set(10.0,0.0,0.0);
        this.add(esfera1);
        var esfera2 = new MySphere();
        esfera2.position.set(-10.0,0.0,0.0);
        this.add(esfera2);
        var esfera3 = new MySphere();
        esfera3.position.set(0.0,0.0,10.0);
        this.add(esfera3);
        var esfera4 = new MySphere();
        esfera4.position.set(0.0,0.0,-10.0);
        this.add(esfera4);
        var esfera5 = new MySphere();
        esfera5.position.set(7.5,0.0,7.5);
        this.add(esfera5);
        var esfera6 = new MySphere();
        esfera6.position.set(7.5,0.0,-7.5);
        this.add(esfera6);
        var esfera7 = new MySphere();
        esfera7.position.set(-7.5,0.0,-7.5);
        this.add(esfera7);
        var esfera8 = new MySphere();
        esfera8.position.set(-7.5,0.0,7.5);
        this.add(esfera8);
      }

      createGUI (gui,titleGui) {
        this.guiControls = new function () {
            this.velocidad = 0;
        } 
        var that = this

        var folder = gui.addFolder (titleGui);

        folder.add (this.guiControls, 'velocidad', -0.5, 0.5, 0.01).name ('Velocidad: ').listen().onChange(function(velocidad){
            that.guiControls.velocidad = velocidad;
        });

      }

      
}