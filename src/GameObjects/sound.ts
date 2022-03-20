import { setTimeout } from "@dcl/ecs-scene-utils";
import {mySystem} from "../System/system"
export function Music(build,url="src/resource/music.wav")
{
  
const cube = new Entity()
this.update=()=>{
  let ps=Camera.instance.position;
    cube.getComponent(Transform).position=new Vector3(ps.x,ps.y,ps.z)
   /* setTimeout(1000,() => {
      this.update()
    });*/
}
this.transform=    new Transform({
    position: new Vector3(0,1,0) ,
    rotation: Quaternion.Identity,
    scale:new Vector3(1,1,1)
  })
cube.addComponent(this.transform);
//this.update();
//cube.addComponent(new BoxShape()).withCollisions=false;
// Create AudioClip object, holding audio file
const clip = new AudioClip(url)

// Create AudioSource component, referencing `clip`
const source = new AudioSource(clip)

// Add AudioSource component to entity
cube.addComponent(source)
engine.addEntity(cube);
//cube.setParent(build);

// Play sound
source.loop = true
source.playing = true
source.volume=1;
mySystem.GameObjects.push(this);
}