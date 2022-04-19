import { setTimeout } from "@dcl/ecs-scene-utils";

export function Elevator(building,position=new Vector3(0,0,0))
{
    this.elevatoractive=true;
    this.floor=0;
    const entity = new Entity()
const shapeComponent = new GLTFShape("models/elevator.glb")
entity.addComponent(shapeComponent)
entity.addComponent(
  new Transform({
    position,
  }) 
)
entity.setParent(building) 

entity.addComponent(new Animator())
const animator = entity.getComponent(Animator)
for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
        animator.addClip(new AnimationState("floor"+i+"_"+j,{layer:0,speed:0.3,looping:false})) ;
        
    }
    
}

 
entity.addComponent( 
    new OnPointerDown((e) => {
     // log(this.elevatoractive,this.floor,e.hit.meshName);
     log(e.hit.meshName)
      if(!this.elevatoractive)
      return
      let x=parseInt(e.hit.meshName)
      if(!x)
      if(x!=0)
      return
      if(x==this.floor)
      return
      
      this.elevatoractive=false;
     // log(this.elevatoractive);
       //if(this.clickfloor) 
        animator.getClip("floor"+this.floor+"_"+x).play(true);
        log("floor: ",this.floor,x,Math.abs(this.floor-x))
        setTimeout(3000/Math.abs(this.floor-x),() => {
          this.floor =x
          this.elevatoractive=true;
        });
    }//, {showFeedback: false }
    )
    ) 
    
    
    
   // setbuttons(entity)
    /*for (let index = 1; index < 0; index++) {
      this.animator.addClip(new AnimationState("floor0_"+index,{layer:0})) ;
    this.animator.getClip("floor0_"+index).play();
      
    }*/



}

function setbuttons(elevator)
{
    const entity = new Entity()
    const box = new BoxShape()
    entity.addComponent(box)
entity.addComponent(
  new Transform({
    position:new Vector3(0,0,0),
  })
)
entity.setParent(elevator)
}
