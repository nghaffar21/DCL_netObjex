//import {mySystem} from "../System/system"
export class Button extends Entity
{
    transform2;
    myEntity:Entity;
    myMaterial:Material;
    constructor(color,index,rings,position0=Vector3.Zero())
    {
        super();
    let myEntity =this;
myEntity.addComponent(new CylinderShape())

//Create material and configure its fields
this. myMaterial = new Material()
let myMaterial=this.myMaterial
myMaterial.albedoColor = color
myMaterial.metallic = 0.9
myMaterial.roughness = 0.1
this.transform2 = new Transform({
    position: new Vector3(position0.x+index*5,position0.y,position0.z),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  })
  myEntity.addComponentOrReplace(this.transform2)

myEntity.addComponent(
    new OnPointerDown((e) => {
      rings.rings.forEach(element => {
        element.setColor(index)
      });
    })
  )
  
}

add(enty)
{
//Assign the material to the entity
this.addComponent(this.myMaterial)

this.setParent(enty);}
}
