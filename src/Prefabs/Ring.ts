import {mySystem} from "../System/system"
export class Ring extends Entity
{
    interval=0;
    transform2;
    myEntity:Entity;
    myMaterial:Material;
    constructor(color,index,position0=Vector3.Zero())
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
    position: new Vector3(position0.x,position0.y+index*5,position0.z),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(15, 0.2, 15)
  })
  myEntity.addComponentOrReplace(this.transform2)
  mySystem.GameObjects.push(this);
  
}
setColor(color)
{
    this.myMaterial.albedoColor=color
}
update()
{
    const dis=50
    this.interval++
    this.interval%=dis;
    let distance = Vector3.Up().scale((this.interval>dis/2?-0.5:0.5));
    this.transform2.translate(distance);
}
add(enty)
{
//Assign the material to the entity
this.addComponent(this.myMaterial)

this.setParent(enty);}
}
