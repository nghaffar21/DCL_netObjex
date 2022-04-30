import { setTimeout } from "@dcl/ecs-scene-utils";

export function Elevator(building,position=new Vector3(0,0,0))
{
    this.elevatoractive=true;
    this.floor=0;


    const entity = new Entity("elvator")
    const shapeComponent = new GLTFShape("models/elevator.glb")
    const animator =  entity.addComponent(new Animator())// entity.getComponent(Animator)


    const entity2 = new Entity("buttons")
    const shapeComponent2 = new GLTFShape("models/buttons.glb")
    //const animator2 =  entity2.addComponent(new Animator())


    initial();

 
    setbuttons(this,animator,entity)
    
    setbuttons(this,animator,entity2);
    
     
    function setbuttons(t,animator,entity)
    {
      entity.addComponent( 
        new OnPointerDown((e) => {
        log(e.hit.meshName)
        if(!t.elevatoractive)
        return
        let x=parseInt(e.hit.meshName)
        if(!x)
        if(x!=0)
        return
        if(x==t.floor)
        return
        
        t.elevatoractive=false;
         
        animator.getClip("floor"+t.floor+"_"+x).play(true);
      log("floor: ",t.floor,x,Math.abs(t.floor-x))
      setTimeout(500*Math.abs(t.floor-x),() => {
        t.floor =x
        t.elevatoractive=true;
      });
          
      }//, {showFeedback: false }
      )
      ) 





      
    }

    function setcubbuttons()
    {
      const tages=[1.7,10,20,30]
      for (let i = 0; i < 4; i++) {
        const element = new Entity();
        element.addComponent(new BoxShape());
        element.addComponent(new Transform({scale:new Vector3(0.3,0.6,0.6 ),rotation:Quaternion.Euler(0,0,40)
          ,position:new Vector3(2.9,tages[i],5.3)}));
        element.setParent(building);
        
      }
    }
  
    function initial()
    {
      entity.addComponent(shapeComponent)
      entity2.addComponent(shapeComponent2)
      entity.addComponent(
        new Transform({
          position,
        }) 
      )
      entity.setParent(building) 
      entity2.setParent(building) 
      
     
      
      for (let i = 0; i < 6; i++) {
          for (let j = 0; j < 6; j++) {
              animator.addClip(new AnimationState("floor"+i+"_"+j,{layer:0,speed:0.4,looping:false})) ;
  
          }
  
      }
    }

}


