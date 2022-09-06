import { setTimeout } from "@dcl/ecs-scene-utils";
export function Lamp(building)
{

  log("lmp")

    this.active=false;
    this.canClick=true;

    const entity = new Entity("lamp")
    const shapeComponent = new GLTFShape("models/lamp.glb")
    const animator =  entity.addComponent(new Animator())
    this.animator=animator;
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
          if(!this.canClick)
          return;
         // wait();
            //this.active=!this.active;
            this.canClick=false;
            
            let callUrl="https://6ndtux65mn7xfpija7hha2xn7y0mvjnr.lambda-url.us-east-2.on.aws/"
            executeTask(async () => {
                

 
  
              let canvas = new UICanvas()
              canvas.visible = true
              let message = new UIText(canvas)
              message.value = "Wait..."
             // message.adaptWidth = true
              //message.adaptHeight=true
              //message.textWrapping = true
              message.fontSize = 50
              message.width = "40%"
              message.height = "40%"


    
         

              try { 
                let response = await fetch(callUrl,{
                //  headers: { "Content-Type": "application/json" },
                method: "POST",
                body: JSON.stringify({
                  toogle: true})
              })
                let json = await response.json()
                log("json: ",json)
                message.value = ""
                animator.getClip(json.body=="off"?"off":"on").play();
              } catch {
                log("failed to reach URL")
                message.value = "Lamp is offline"
                  message.color=Color4.Red();
                 
              }  

              this.canClick=true;
              setTimeout(3000,()=>{
                  
                message.value = ""
              })
             
              
            }
            
            )

      }//, {showFeedback: false }
      )
      ) 
      entity.setParent(building) 
    entity.setParent(building) ;
}


