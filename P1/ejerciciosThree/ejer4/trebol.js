class MyClub extends THREE.Object3D{
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

        this.baseGeo = new THREE.LatheGeometry(this.points);
        this.base = new THREE.Mesh(this.baseGeo,unMaterial);
        this.base.position.z = 0.0;



        this.add(this.base);

        var superiorShape = new THREE.Shape();

        superiorShape.moveTo (0,0);
        superiorShape.bezierCurveTo (5, -4.5, 7,3.5, 1.5,3);
        superiorShape.bezierCurveTo (4.6,9, -4.6,9, -1.5,3);
        superiorShape.bezierCurveTo (-7,3.5, -4.5, -5, 0,0);


        var extrudeSettings =  {depth: 1, steps: 100, bevelSize: 1, bevelThickness: 1, bevelSegments: 100};
        var superiorGeo = new THREE.ExtrudeGeometry(superiorShape,extrudeSettings);
        this.superior = new THREE.Mesh(superiorGeo,new THREE.MeshPhongMaterial());
        this.superior.scale.set (0.1,0.1,0.01);
        this.superior.position.set(0,0.6,0.0);


        this.add(this.superior);
    }
}