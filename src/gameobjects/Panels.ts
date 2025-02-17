import * as utils from '@dcl/ecs-scene-utils'
import { setTimeout, TriggerBoxShape } from "@dcl/ecs-scene-utils";
import { movePlayerTo } from "@decentraland/RestrictedActions";
import { Transport } from "./Transport";
export function Paneles(building)
{
    const rooms=[new Vector3(12,28,13),new Vector3(12,20,13),new Vector3(12,20,4),
        new Vector3(12,10,4),new Vector3(12,0,4),
        new Vector3(-12,28,12),new Vector3(-12,23,12),
        new Vector3(-6,15,6),new Vector3(-6,15,12),new Vector3(-12,0,12)]
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

 botomroom2(this,new Vector3(-11.6,0,13.2),new Vector3(5,5,1.1),new Vector3(-11,15,12));
 botomroom2(this,new Vector3(-12.4,0,2.4),new Vector3(4,5,2),new Vector3(-11,15,2.4));
 botomroom(this,new Vector3(-4.7,0,13.2),new Vector3(3.2,5,2.5),8);
 botomroom(this,new Vector3(-4.85,0,5.5),new Vector3(1.3,5,1.3),7);
 botomroom(this,new Vector3(7,1,3),new Vector3(5,4,2),2);
 botomroom2(this,new Vector3(10,1,13.5),new Vector3(5,4,2),new Vector3(10,10,13.5));


 
 botomroom(this,new Vector3(12.5,1,3),new Vector3(2,4,2),3);


 


function botomroom(t,rom,sz,index)
{
    [rom].forEach(element => {
        const box=new Entity()
        //box.addComponent(new BoxShape())
        box.addComponent(new Transform({position:element}))
        //box.getComponent(BoxShape).withCollisions = false


        let triggerBox = new utils.TriggerBoxShape(sz);

        //create trigger for entity
        box.addComponent(
          new utils.TriggerComponent(
            triggerBox, //shape
            {
              onCameraEnter : () => {
                if(t.run)
                return
                transport.start();
                setTimeout(1000,() => {
                    movePlayerTo(rooms[index])
                    t.run=false
                });
                t.run=true
              }//,enableDebug:true
            }
          )
        )
        

        engine.addEntity(box);
        
      });
}

function botomroom2(t,rom,sz,rom2)
{
    [rom].forEach(element => {
        const box=new Entity()
        //box.addComponent(new BoxShape())
        box.addComponent(new Transform({position:element}))
        //box.getComponent(BoxShape).withCollisions = false


        let triggerBox = new utils.TriggerBoxShape(sz);

        //create trigger for entity
        box.addComponent(
          new utils.TriggerComponent(
            triggerBox, //shape
            {
              onCameraEnter : () => {
                if(t.run)
                return
                transport.start();
                setTimeout(1000,() => {
                    movePlayerTo(rom2)
                    t.run=false
                });
                t.run=true
              }//,enableDebug:true
            }
          )
        )
        

        engine.addEntity(box);
        
      });
}
/*
rooms.forEach(element => {
    const box=new Entity()
    box.addComponent(new BoxShape())
    box.addComponent(new Transform({position:element}))
    engine.addEntity(box);
  });*/

      entity.addComponent(shapeComponent)
      entity.setParent(building) 
}