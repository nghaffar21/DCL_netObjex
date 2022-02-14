import {mySystem} from "../System/system"
export function Elvator(building,floors=null,position=new Vector3(-1,0,0),floorsCount=6,dis=20)
{
    let qsdfds
    const myEntity=new Entity();
    myEntity.setParent(building);
    const vitess=0.1;
    this.target=0;
    myEntity.addComponent(new BoxShape())
let myMaterial=new Material()
myMaterial.albedoColor = Color3.Blue();
myMaterial.metallic = 0.9
myMaterial.roughness = 0.1
myEntity.addComponent(myMaterial)



    const transform2 = new Transform({
        position:position,
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(12, 0.5, 6)
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
    for (let i = 0; i < floorsCount; i++) 
    {
        const buttonEntity=new Entity();
        buttonEntity.setParent(myEntity);
        buttonEntity.addComponent(new CylinderShape())
        const transform2 = new Transform({
            position:new Vector3(-0.4+i/floorsCount,0.5,0.4),
            rotation: new Quaternion(0, 0, 0, 1),
            scale: new Vector3(0.3/floorsCount, 0.2, 0.6/floorsCount)
        })
        const t=this;
        buttonEntity.addComponent(
            new OnPointerDown((e) => {
                t.target=floors[i];
                log(t.target)
            })
          )
          buttonEntity.addComponent(transform2)
          const textEntity=new Entity();
          textEntity.setParent(buttonEntity);
          const transform3 = new Transform({
            position:new Vector3(0,1.1,0),
            rotation: Quaternion.Euler(90, 0, 0, ),
            scale: new Vector3(1,1,1)
        })
          const myText = new TextShape(i.toString());
          textEntity.addComponent(transform3);
          textEntity.addComponent(myText)
          myText.color = Color3.Black()
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