class MyPeon extends THREE.Object3D {
    constructor(gui,titleGui)
    {
        super();
        this.createGUI(gui,titleGui);
        var unMaterial = new THREE.MeshNormalMaterial();
        //Puntos es el array que contendrá el perfil del peón
        this.points = [];
        this.points.push(new THREE.Vector3 (1.0,-1.4,0.0));
        this.points.push(new THREE.Vector3 (1.0,-1.1,0.0));
        this.points.push(new THREE.Vector3 (0.5,-0.7,0.0));
        this.points.push(new THREE.Vector3 (0.4,-0.4,0.0));
        this.points.push(new THREE.Vector3 (0.4,0.5,0.0));
        this.points.push(new THREE.Vector3 (0.5,0.6,0.0));
        this.points.push(new THREE.Vector3 (0.3,0.6,0.0));
        this.points.push(new THREE.Vector3 (0.5,0.8,0.0));
        this.points.push(new THREE.Vector3 (0.55,1.0,0.0));
        this.points.push(new THREE.Vector3 (0.5,1.2,0.0));
        this.points.push(new THREE.Vector3 (0.3,1.4,0.0));
        this.points.push(new THREE.Vector3 (0.0,1.4,0.0));
        this.points.push(new THREE.Vector3 (0.0,-1.4,0.0));
        this.points.push(new THREE.Vector3 (1.0,-1.4,0.0));
        

        //LatheGeometry(puntos,segmentos,angulo de inicio, angulo máximo)
        //Los ángulos van en radianes
        this.peonGeo = new THREE.LatheGeometry(this.points);
        this.peon = new THREE.Mesh(this.peonGeo,unMaterial);
        
        //Peon semidibujado
        this.SemipeonGeo = new THREE.LatheGeometry(this.points,12,Math.PI,Math.PI);
        this.semiPeon = new THREE.Mesh(this.SemipeonGeo,unMaterial);
        this.semiPeon.position.x = -5.0;

        //Código para dibujar el perfil
        this.lineaGeo = new THREE.Geometry();
        this.lineaGeo.vertices = this.points;
        this.line = new THREE.Line(this.lineaGeo,unMaterial);
        this.line.position.x = 5.0;

        this.add(this.peon);
    }

    createGUI(gui,titleGui)
    {
        // Controles para el tamaño, la orientación y la posición de el peon
        this.guiControls = new function () {
            this.resolution = 10.0;
            this.angle = Math.PI;
        }
        var that = this;
        var folder = gui.addFolder (titleGui);
        folder.add(this.guiControls, 'resolution',3.0,20.0,1.0).name('Resolución: ').listen().onChange(function(resolution){
            var newGeo = new THREE.LatheGeometry(that.points,resolution,0.0,that.guiControls.angle);
            that.peon.geometry = newGeo;
        });
        folder.add(this.guiControls, 'angle',0.0,2*Math.PI,0.1).name('Ángulo: ').listen().onChange(function(angle){
            var newGeo = new THREE.LatheGeometry(that.points,that.guiControls.resolution,0.0,angle);
            that.peon.geometry = newGeo;
        });  
    }

    update(){}
}