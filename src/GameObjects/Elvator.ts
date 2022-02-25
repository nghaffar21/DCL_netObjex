import {mySystem} from "../System/system"
import * as utils from '@dcl/ecs-scene-utils'
export function Elvator(building,floors=null,position=new Vector3(-4,0,-11),floorsCount=6,dis=20)
{
    this.curentFloor=0;
    const myEntity=new Entity();
    myEntity.setParent(building);
    const vitess=0.1;
    this.target=0;
    myEntity.addComponent(new GLTFShape("modeles/Metamall_elevator.gltf"))
let myMaterial=new Material()
myMaterial.albedoColor = new Color4(0,0,0,0);
 this.ismoving=false;
//myMaterial.metallic = 0.9
//myMaterial.roughness = 0.1
myEntity.addComponent(myMaterial)

this.finishmove=function (t,i) {
    t.target=floors[i];
    t.ismoving=false;
    log(2* Math.abs(t.curentFloor-i),"second");
    t.curentFloor=i;
    
}

    const transform2 = new Transform({
        position:position,
        rotation:  Quaternion.Euler(0,-90,0),
        scale: new Vector3(1, 1, 1)
    })
    myEntity.addComponent(transform2)
    if(floors==null)
    {
        floors=[];
        for (let i = 0; i < floorsCount; i++) 
        {
            floors.push(position.y+(dis*i/floorsCount))
        }
    }
    this.moveelvator=function(i,t=null)
    {
        if(t.ismoving)
        return;
        t.ismoving=true;
        myEntity.addComponent(new utils.MoveTransformComponent(new Vector3(position.x,t.target,position.z) ,new Vector3(position.x,floors[i],position.z) , 2* Math.abs(t.curentFloor-i),()=>t.finishmove(t,i)));
    }

    for (let i = 0; i < floorsCount; i++) 
    {
        const buttonEntity=new Entity();
        buttonEntity.setParent(myEntity);
        buttonEntity.addComponent(new BoxShape())//.visible = false
        let transform2 
        if(i<=2)
         transform2 = new Transform({
            position:new Vector3(7.6+i*5/floorsCount,1.7,1.55),
            rotation:  Quaternion.Euler(-50, 0, 0 ),
            scale: new Vector3(3.6/floorsCount, 0.05, 3.6/floorsCount)
        })
        else
        transform2 = new Transform({
            position:new Vector3(7.6+(i-3)*5/floorsCount,2.28,2.1),
            rotation:  Quaternion.Euler(-50, 0, 0 ),
            scale: new Vector3(3.6/floorsCount, 0.1, 3.6/floorsCount)
        })
        const t=this;
        buttonEntity.addComponent(
            new OnPointerDown((e) => {
                //this.moveelvator(i,t);
                t.target=floors[i];
                //log(t.target)
            })
          )
          buttonEntity.addComponent(transform2)
          buttonEntity.addComponent(myMaterial)
          const textEntity=new Entity();
          textEntity.setParent(buttonEntity);
          const transform3 = new Transform({
            position:new Vector3(0,1.1,0),
            rotation: Quaternion.Euler(90, 0, 0, ),
            scale: new Vector3(1,1,1)
        })
         /* const myText = new TextShape(i.toString());
          textEntity.addComponent(transform3);
          textEntity.addComponent(myText)
          myText.color = Color3.Black()*/
    }
    myEntity.addComponentOrReplace(transform2)
    this.update=function()
    {
        let pos=myEntity.getComponent(Transform).position;
        let delta=(this.target-pos.y)
        if(delta>vitess)
            delta=vitess;
        else if(delta<-vitess)
            delta=-vitess;
        myEntity.getComponent(Transform).position.set(pos.x, pos.y+delta, pos.z)
    }
    mySystem.GameObjects.push(this);
}