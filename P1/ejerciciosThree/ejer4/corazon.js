class MyHeart extends THREE.Object3D {
    constructor(gui,titleGui)
    {
        super();
        var x = 0, y = 0;
        var heartShape = new THREE.Shape();
        heartShape.moveTo( x + 25/25, y + 25/25 )
        heartShape.bezierCurveTo( x + 25/25, y + 25/25, x + 20/25, y, x, y )
        heartShape.bezierCurveTo( x - 30/25, y, x - 30/25, y + 35/25, x - 30/25, y + 35/25 )
        heartShape.bezierCurveTo( x - 30/25, y + 55/25, x - 10/25, y + 77/25, x + 25/25, y + 95/25 )
        heartShape.bezierCurveTo( x + 60/25, y + 77/25, x + 80/25, y + 55/25, x + 80/25, y + 35/25 )
        heartShape.bezierCurveTo( x + 80/25, y + 35/25, x + 80/25, y, x + 50/25, y )
        heartShape.bezierCurveTo( x + 35/25, y, x + 25/25, y + 25/25, x + 25/25, y + 25/25 );

        var extrudeSettings = {amount: 8,bevelEnabled: true, bevelSegments: 2, steps: 5, bevelSize: 1, bevelThickness: 1 };
        var heartGeo = new THREE.ExtrudeBufferGeometry(heartShape,extrudeSettings);
        this.heart = new THREE.Mesh(heartGeo,new THREE.MeshPhongMaterial());
        
        
        this.add(this.heart);
    }

    update()
    {
        
    }
}