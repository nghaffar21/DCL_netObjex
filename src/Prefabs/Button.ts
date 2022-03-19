//import {mySystem} from "../System/system"
export class Button extends Entity
{
    transform2;
    myEntity:Entity;
    myMaterial:Material;
    constructor(color,index,rings,position0=new Vector3(0,0,0))
    {
        super();
    let myEntity =this;
myEntity.addComponent(new BoxShape())

//Create material and configure its fields
this. myMaterial = new Material()
let myMaterial=this.myMaterial
myMaterial.albedoColor=new Color4(0,0,0,0)
this.transform2 = new Transform({
    position: new Vector3(position0.x+index*0.75,position0.y,position0.z),
    rotation:  Quaternion.Euler(40, 0, 0),
    scale: new Vector3(0.6, 1, 0.2)
  })
  myEntity.addComponentOrReplace(this.transform2)

myEntity.addComponent(
    new OnPointerDown((e) => {
     /* rings.rings.forEach(element => {
        element.setColor(index)
      });*/
      rings.ring.setColor(index)
    })
  )
  
}

add(enty)
{
//Assign the material to the entity
this.addComponent(this.myMaterial)

this.setParent(enty);}
}
