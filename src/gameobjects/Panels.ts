import { setTimeout } from "@dcl/ecs-scene-utils";
import { movePlayerTo } from "@decentraland/RestrictedActions";
import { Transport } from "./Transport";
export function Paneles(building)
{
    const rooms=[new Vector3(12,28,13),new Vector3(12,20,13),new Vector3(12,20,4),new Vector3(12,10,4),new Vector3(12,0,4),new Vector3(-12,28,12),new Vector3(-12,23,12),new Vector3(-6,15,6),new Vector3(-6,15,12),new Vector3(-12,0,12)]
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
            movePlayerTo(rooms[x])
            this.run=false
        });
        
        this.run=true
      }//, {showFeedback: false }
))



/*rooms.forEach(element => {
    const box=new Entity()
    box.addComponent(new BoxShape())
    box.addComponent(new Transform({position:element}))
    engine.addEntity(box);
  });*/

      entity.addComponent(shapeComponent)
      entity.setParent(building) 
}