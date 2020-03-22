
class ClubColumn extends THREE.Object3D {
    
    constructor()
    {
        super();
        var columnShape = new THREE.Shape();

        columnShape.moveTo (0,0);
        columnShape.bezierCurveTo (5, -4.5, 7,3.5, 1.5,3);
        columnShape.bezierCurveTo (4.6,9, -4.6,9, -1.5,3);
        columnShape.bezierCurveTo (-7,3.5, -4.5, -5, 0,0);
        var randomPoints = [];

        for ( var i = 0; i < 10; i ++ ) {

            randomPoints[i] = ( new THREE.Vector3( ( i - 4.5 ) * 50, THREE.Math.randFloat( - 50, 50 ), THREE.Math.randFloat( - 50, 50 ) ) );

        }

        var randomSpline = new THREE.CatmullRomCurve3( randomPoints );

        var extrudeSettings = {steps: 200, bevelEnabled: false, extrudePath: randomSpline};
        this.columnGeo = new THREE.ExtrudeBufferGeometry(columnShape,extrudeSettings);
        
        this.column =  new THREE.Mesh(this.columnGeo,new THREE.MeshPhongMaterial());

        this.column.scale.set (0.01,0.01,0.01);
        this.column.position.set(-6.0,0.0,0.0);
        this.column.rotation.z = 1/2 * Math.PI;
        this.add(this.column);
    }
    update()
    {
        this.column.rotation.y += 0.015;
        this.column.rotation.x += 0.015;
    }
}