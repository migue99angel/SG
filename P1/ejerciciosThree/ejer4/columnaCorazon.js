class HeartColumn extends THREE.Object3D {
    
    constructor()
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
        var randomPoints = [];

        for ( var i = 0; i < 10; i ++ ) {

            randomPoints[i] = ( new THREE.Vector3( ( i - 4.5 ) * 50, THREE.Math.randFloat( - 50, 50 ), THREE.Math.randFloat( - 50, 50 ) ) );

        }

        var randomSpline = new THREE.CatmullRomCurve3( randomPoints );

        var extrudeSettings = {steps: 200, bevelEnabled: false, extrudePath: randomSpline};
        this.heartnGeo = new THREE.ExtrudeBufferGeometry(heartShape,extrudeSettings);
        
        this.columnH =  new THREE.Mesh(this.heartnGeo,new THREE.MeshPhongMaterial());

        this.columnH.scale.set (0.01,0.01,0.01);
        this.columnH.position.set(4.0,0.0,0.0);
        this.columnH.rotation.z = 1/2 * Math.PI;
        this.add(this.columnH);
    }
    update(){}
}