import { setTimeout } from "@dcl/ecs-scene-utils";

export function Transport()
{
  
    const entity = new Entity("Transport")
    const shapeComponent = new GLTFShape("models/teleport.glb")
    const animator =  entity.addComponent(new Animator())
    animator.addClip(new AnimationState("Animation",{layer:20,speed:1,looping:false})) ;
      entity.addComponent(shapeComponent)
      animator.getClip("Animation").play(true);

        const p=Camera.instance.feetPosition
        this.start=function()
        { 
            animator.getClip("Animation").play(true);
            entity.getComponent(Transform).position=new Vector3(p.x,p.y,p.z)
            entity.getComponent(Transform).scale=new Vector3(1,1,1)
        }
        entity.addComponent(new Transform({position:new Vector3(0,10,0),scale:new Vector3(0,0,0)}))

 
      //entity.setParent(building) 
      engine.addEntity(entity)
      
}