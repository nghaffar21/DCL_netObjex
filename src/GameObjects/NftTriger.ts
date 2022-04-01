import * as utils from '@dcl/ecs-scene-utils'
export function NftTriger(building,visitfloor,y=1,dy=3)
{
//create entity
const box = new Entity()

//create shape for entity and disable its collision
//box.addComponent(new BoxShape())
//box.getComponent(BoxShape).withCollisions = false

//set transform component with initial position
//box.addComponent(new Transform({scale:new Vector3(200,dy,30) ,position: new Vector3(-8, y, 0) }))
box.addComponent(new Transform({scale:new Vector3(1,1,1) ,position: new Vector3(0, 0, 0) }))
 
// create trigger area object, setting size and relative position
let triggerBox = new utils.TriggerBoxShape(new Vector3(30,dy,100),new Vector3(0,y,0))

//create trigger for entity


//add entity to engine
box.setParent(building)
box.addComponent(
    new utils.TriggerComponent(
      triggerBox, //shape
      {
        onCameraEnter : () => { 
       // log('visitfloor!')
        visitfloor();
        //box.getComponent(Transform).position = new Vector3(0,0,0)
        },
       // enableDebug:true
      }
    )
  )
}