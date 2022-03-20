
import * as utils from '@dcl/ecs-scene-utils'
export function VideoPrefab(building,video="src/resource/video.mp4",position0=new Vector3(10, 15, -12),rotation0=Quaternion.Euler(0,0,0),flip=true)
{    const myVideoClip = new VideoClip(video)
    
      const myVideoTexture = new VideoTexture(myVideoClip)
    myVideoTexture.loop=true;

      const myMaterial = new Material()
      myMaterial.albedoTexture = myVideoTexture
      myMaterial.roughness = 1
      myMaterial.specularIntensity = 0
      myMaterial.metallic = 0
    
      const screen = new Entity()
      screen.addComponent(new PlaneShape())
      screen.addComponent(
        new Transform({
          position: position0,
          rotation: rotation0,
          scale:new Vector3(21,10,1)
        })
      )
      screen.addComponent(myMaterial)
      screen.setParent( building)
      let triggerBox = new utils.TriggerBoxShape(new Vector3(20,12,40),new Vector3(flip?-12:12,flip?-10:-10,0))

//create trigger for entity


//add entity to engine
screen.addComponent(
    new utils.TriggerComponent(
      triggerBox, //shape
      {
        onCameraEnter : () => { 
          myVideoTexture.play();
        },
        
        onCameraExit : () => { 
          myVideoTexture.pause();
        },
        enableDebug:false
      }
    )
  )
      //myVideoTexture.play()

}