class MySpade extends THREE.Object3D{
    constructor(gui,titleGui)
    {
        super();
        
        var unMaterial = new THREE.MeshPhongMaterial();
        //Puntos es el array que contendrá la base de la pica
        this.points = [];
        this.points.push(new THREE.Vector3 (0.0,0.0,0.0));
        this.points.push(new THREE.Vector3 (0.25,0.0,0.0));
        this.points.push(new THREE.Vector3 (0.1,0.25,0.0));
        this.points.push(new THREE.Vector3 (0.0,0.5,0.0));
        this.points.push(new THREE.Vector3 (0.0,0.75,0.0));
        this.points.push(new THREE.Vector3 (0.0,1.0,0.0));
        
        this.superior = new MyHeart(this.gui, "Controles del Corazon");
        this.superior.scale.set (0.25,0.25,0.01);
        this.superior.position.set(0,1.1,0.0);

        //LatheGeometry(puntos,segmentos,angulo de inicio, angulo máximo)
        //Los ángulos van en radianes
        this.baseGeo = new THREE.LatheGeometry(this.points);
        this.base = new THREE.Mesh(this.baseGeo,unMaterial);


        this.nodoA = new THREE.Object3D();
        this.nodoA.position.set(2.0,0.0,0.0);
        this.nodoA.add(this.superior);
        this.nodoA.add(this.base);

        this.spade = new THREE.Object3D();
        this.spade.add(this.nodoA);
        
        this.add(this.spade);

    }

    update()
    {
        this.spade.rotation.z += 0.01;
        this.nodoA.rotation.z -= 0.01;
        this.superior.rotation.y += 0.015;
        this.base.rotation.y += 0.015;
    }
}