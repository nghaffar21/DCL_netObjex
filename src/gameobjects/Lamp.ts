export function Lamp(building)
{
    this.active=false;


    const entity = new Entity("lamp")
    const shapeComponent = new GLTFShape("models/lamp.glb")
    const animator =  entity.addComponent(new Animator())
    animator.addClip(new AnimationState("on",{layer:90,speed:3,looping:false})) ;
    animator.addClip(new AnimationState("off",{layer:90,speed:3,looping:false})) ;
    entity.addComponent(shapeComponent)
      entity.addComponent(
        new Transform({
          position:new Vector3(-12,12.5,-6),
        }) 
      )
      entity.addComponent( 
        new OnPointerDown((e) => {
            this.active=!this.active;
            animator.getClip(this.active?"off":"on").play();
            let callUrl=this.active?"https://maker.ifttt.com/trigger/light_off/json/with/key/d01mh4Qun-8mTIrZyh9TKJIXk2hqWd-K48XQOEHX6fM":
            "https://maker.ifttt.com/trigger/light_on/json/with/key/d01mh4Qun-8mTIrZyh9TKJIXk2hqWd-K48XQOEHX6fM"
            executeTask(async () => {
                try {
                  let response = await fetch(callUrl)
                  let json = await response.json()
                  log(json)
                } catch {
                  log("failed to reach URL")
                }
              })

      }//, {showFeedback: false }
      )
      ) 
      entity.setParent(building) 
    entity.setParent(building) ;
}