
class Modelo extends THREE.Object3D {
    
    constructor() {
        super();
        var that = this;
        var materialLoader = new THREE.MTLLoader();
        var objectLoader = new THREE.OBJLoader();

        materialLoader.load('/ejerciciosThree/models/porsche911/911.mtl',
        function (materials){
            objectLoader.setMaterials(materials);
            objectLoader.load('/ejerciciosThree/models/porsche911/Porsche_911_GT2.obj',
            function(object){
                var modelo = object;
                that.add(modelo);
            },null,null);
        })
    }

    update()
    {
        this.rotation.y += 0.01
    }
}