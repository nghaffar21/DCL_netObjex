import {mySystem} from "../System/system"
import * as utils from '@dcl/ecs-scene-utils'
export function Elvator(building,floors=null,position=new Vector3(1.15,0,-7.3),floorsCount=6,dis=20)
{
    this.curentFloor=0;
    const myEntity=new Entity();
    myEntity.setParent(building);
    const vitess=0.1;
    this.target=0;
    this.buttonsBox=[]
    //myEntity.addComponent(new GLTFShape("modeles/elvator.glb"))
    let myMaterial=new Material()
    myMaterial.albedoColor = new Color4(1,0,0,0);
    this.ismoving=false;
    //myEntity.addComponent(myMaterial)

    this.animator = new Animator()

    /*const clipSwim = new AnimationState("floor0_5")
this.animator.addClip(clipSwim)
clipSwim.play()*/
    // Add animator component to the entity
    building.addComponent(this.animator)

    // Instance animation clip object
    for (let i = 0; i < 6; i++) 
{
    for (let j = 0; j < 6; j++) 
    {
        let k=i;
        /*if(j<i)
        { 
            i=j; 
            j=k;
        }*/
        //log("add ","floor"+i+"_"+j)
        this.animator.addClip(new AnimationState("floor"+i+"_"+j,{looping:false,layer:1,speed:0.3}) )
    }
    
    }

    //let animator = new Animator();
//building.addComponent(animator);
    this.animator.addClip(new AnimationState("Animation",{layer:0})) ;
    this.animator.getClip("Animation").play(); 
        
    //this.animator.addClip(new AnimationState("floor0_5") )
//this.animator.getClip("floor0_5").play();
// Add animation clip to Animator component

    this.finishmove=function (t,i) {
    t.target=floors[i];
    t.ismoving=false;
    //log(2* Math.abs(t.curentFloor-i),"second");
    t.curentFloor=i;
    
    }
    
    const transform2 = new Transform({
        position:position,
        rotation:  Quaternion.Euler(0,180,0),
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
    this.playelvator=function(i,t,k=-1)
    {
        let j=t.curentFloor;
        if(k!=-1)
        if(j==i || j!=k)
        return;
        for (let i0 = 0; i0 < 6 ;i0++) {
            for (let j = 0; j <6; j++) {
                t.buttonsBox[i0][j].visible=(i0==i);
            }
            
        }
            //log(" floor"+j+"_"+i)
            let clip= t.animator.getClip("floor"+j+"_"+i);
            clip.play();
        t.curentFloor=i;
    }
    let buttonsys=[0,7.8,12.4,17.4,22.4,69.5]
    let buttonys=[0,7.8,12.8,17.7,22.4,69.5]
    for(let j = -1; j < floorsCount; j++)
    {const buttonsBox0=[];
    for (let i = 0; i < floorsCount; i++) 
    {
       /* if(j==-1)
        /*if(i==0||i==5)
             continue;*/
        const buttonEntity=new Entity();
        const box= new BoxShape()
        box.withCollisions = false;
        box.visible=(j<=0);
        buttonEntity.setParent(myEntity);
        buttonEntity.addComponent(box)//.visible = false
        let transform2 
        if(j==-1)
        {
             
             transform2 = new Transform({
            position:new Vector3(7.5,buttonys[i]+1.4,-9.5),
            rotation:  Quaternion.Euler(50, 90, 0 ),
            scale: new Vector3(5/floorsCount, 0.2, 5/floorsCount)
            })
            if(i==5)
            {
                transform2.position=new Vector3(9,buttonys[i]+1.4,-9.5)
            }

        }
        else if(i<=2)
         transform2 = new Transform({
            position:new Vector3(4.4+i*5/floorsCount,buttonsys[j]+1.7,2.55),
            rotation:  Quaternion.Euler(-50, 0, 0 ),
            scale: new Vector3(3.6/floorsCount, 0.05, 3.6/floorsCount)
        })
        else
        transform2 = new Transform({
            position:new Vector3(4.4+(i-3)*5/floorsCount,buttonsys[j]+2.28,3.0),
            rotation:  Quaternion.Euler(-50, 0, 0 ),
            scale: new Vector3(3.6/floorsCount, 0.1, 3.6/floorsCount)
        })
        const t=this;
        buttonEntity.addComponent( 
            new OnPointerDown((e) => {
                //this.moveelvator(i,t);
                //t.target=floors[i];
                if(j==-1)
                t.playelvator(i,t)                
                else
                {t.playelvator(i,t,j)
                    }
                //from_0_to_1.play()
            })
          )
          buttonsBox0.push(box);
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
    if(j!=-1)
    this.buttonsBox.push(buttonsBox0);
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
        //mySystem.GameObjects.push(this);
}