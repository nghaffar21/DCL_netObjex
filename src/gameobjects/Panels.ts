import { setTimeout } from "@dcl/ecs-scene-utils";
import { movePlayerTo } from "@decentraland/RestrictedActions";
import { Transport } from "./Transport";
export function Paneles(building)
{
    const entity = new Entity("Paneles")
    const shapeComponent = new GLTFShape("models/Poster.glb")
    this.run=false;
    const transport=new Transport()
    entity.addComponent( 
        new OnPointerDown((e) => {
        log(e.hit.meshName)
        if(this.run)
        return
        if(e.hit.meshName.search("room")<0)
            return;
        let x=parseInt(e.hit.meshName.replace("room",""))
        log(x);
        transport.start();
        setTimeout(1000,() => {
            movePlayerTo(new Vector3(0,0,0))
            this.run=false
        });
        
        this.run=true
      }//, {showFeedback: false }
))



      entity.addComponent(shapeComponent)
      entity.setParent(building) 
}