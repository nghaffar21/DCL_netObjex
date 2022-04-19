export function Diamond(building,position,url)
{
    const entity = new Entity()
//const shapeComponent = new GLTFShape("models/diamond.glb")
//entity.addComponent(shapeComponent)
entity.addComponent(
  new Transform({
    position,
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
    for (let index = 1; index < 5; index++) {
      this.animator.addClip(new AnimationState("diamond"+index,{layer:index})) ;
    this.animator.getClip("diamond"+index).play();
      
    }



}
