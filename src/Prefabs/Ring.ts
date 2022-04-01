import {mySystem} from "../System/system"
export class Ring extends Entity
{
    beging=20;
    end =70;
    ringsCount=5;
    interval=0;
    transform2;
    myEntity:Entity; 
    //myMaterial:Material;
    
    constructor(model,position0=Vector3.Zero(),index=0)
    {
        super();
        const ringshape = new GLTFShape("e7f4045f-cb85-43e5-963c-173760106dbe/rings/ring.glb")
        let myEntity =this;
        log(ringshape)
        myEntity.addComponent(ringshape)
        //Create material and configure its fields
        /*this. myMaterial = new Material()
        let myMaterial=this.myMaterial
        myMaterial.albedoColor = color
        myMaterial.metallic = 0.9
        myMaterial.roughness = 0.1*/

        this.transform2 = new Transform({
        position: new Vector3(position0.x,position0.y+index*(this.end-this.beging)/this.ringsCount,position0.z),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
  myEntity.addComponentOrReplace(this.transform2)
  //mySystem.GameObjects.push(this);
  this.myEntity=myEntity; 
}
setColor(color) 
{
    //this.myMaterial.albedoColor=color
    this.myEntity.addComponentOrReplace(new GLTFShape("e7f4045f-cb85-43e5-963c-173760106dbe/rings/ring"+color+".glb"))
}
update()
{
    const dis=50
    this.interval++
    this.interval%=dis;
    //let distance = Vector3.Up().scale((this.interval>=dis/2?-0.5:0.5));
    let position0=this.getComponent(Transform).position;
    this.getComponent(Transform).position.set(position0.x, (position0.y<this.end?(position0.y+1):this.beging), position0.z)//.translate(distance);
}
add(enty)
{
//Assign the material to the entity
//this.addComponent(this.myMaterial)

log(this)

this.setParent(enty);}
}
