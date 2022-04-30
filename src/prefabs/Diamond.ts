import { invisible } from "src/Resource"

export function Diamond(building,position,url,index)
{
    const entity = new Entity()
    //const shapeComponent = new GLTFShape("models/diamond.glb")
    entity.addComponent(new BoxShape())
    
    entity.addComponent(invisible)
    entity.addComponent(
      new Transform({
        position,
        scale:new Vector3(1.2,1.2,1.2)
      })
    )
    entity.setParent(building)
    entity.addComponent(
        new OnPointerDown(() => {
          openExternalURL(url)
        })
        ) 
        this.animator = building.getComponent(Animator)
      
        /*const clipSwim = new AnimationState("floor0_5")
    this.animator.addClip(clipSwim)
    clipSwim.play()*/
        // Add animator component to the entity
        //building.addComponent(this.animator)
       // for (let index = 1; index < 5; index++)
    {
      log("diamond"+index)
      this.animator.addClip(new AnimationState("diamond"+index,{layer:index})) ;
      this.animator.getClip("diamond"+index).play();
    }
}
