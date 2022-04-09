export function Diamond(position,url)
{
    const entity = new Entity()
const shapeComponent = new GLTFShape("models/diamond.glb")
entity.addComponent(shapeComponent)
entity.addComponent(
  new Transform({
    position,
  })
)
engine.addEntity(entity)
entity.addComponent(
    new OnPointerDown(() => {
      openExternalURL(url)
    })
    ) 

    entity.addComponent(new Animator())
    this.animator = entity.getComponent(Animator)

    /*const clipSwim = new AnimationState("floor0_5")
this.animator.addClip(clipSwim)
clipSwim.play()*/
    // Add animator component to the entity
    //building.addComponent(this.animator)
this.animator.addClip(new AnimationState("diamond",{layer:0})) ;
    this.animator.getClip("diamond").play();


}
