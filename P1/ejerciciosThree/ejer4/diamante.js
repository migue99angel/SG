class MyDiamond extends THREE.Object3D {
    constructor(gui,titleGui)
    {
        super();
        
        var diamondShape = new THREE.Shape();
        diamondShape.moveTo(0, 0);
        diamondShape.lineTo(2.5,5.0);
        diamondShape.moveTo(2.5,5.0);
        diamondShape.lineTo(5.0,0.0);
        diamondShape.moveTo(5.0,0.0);
        diamondShape.lineTo(2.5,-5.0);
        diamondShape.moveTo(2.5,-5.0);
        diamondShape.lineTo(0,0);
      
        var extrudeSettings = {amount: 8,bevelEnabled: true, bevelSegments: 2, steps: 5, bevelSize: 1, bevelThickness: 1 };
        var diamondGeo = new THREE.ExtrudeBufferGeometry(diamondShape,extrudeSettings);
        this.diamond = new THREE.Mesh(diamondGeo,new THREE.MeshPhongMaterial()); 
        this.diamond.scale.set (0.1,0.1,0.01);
        this.diamond.position.set(2.0,0.0,0.0);
        this.add(this.diamond);
    }

    update()
    {
        this.scale.set (0.25,0.25,0.1);
        
    }
}