

export function VideoScene(building)
{    const myVideoClip = new VideoClip("videos/video.mp4"
      )
    
      // #2
      const myVideoTexture = new VideoTexture(myVideoClip)
    
      // #3
      const myMaterial = new Material()
      myMaterial.albedoTexture = myVideoTexture
      myMaterial.roughness = 1
      myMaterial.specularIntensity = 0
      myMaterial.metallic = 0
    
    
      // #4
      const screen = new Entity()
      screen.addComponent(new PlaneShape())
      /*screen.addComponent(
        new Transform({
          position: new Vector3(10, 15, -12),
          rotation: Quaternion.Euler(0,0,0),
          scale:new Vector3(21,10,0)
        })
      )*/
      screen.addComponent(
        new Transform({
          position: new Vector3(10, 15, -12),
          rotation: Quaternion.Euler(0,0,0),
          scale:new Vector3(21,10,1)
        })
      )
      screen.addComponent(myMaterial)
      screen.addComponent(
        new OnPointerDown(() => {
          myVideoTexture.playing = !myVideoTexture.playing
        })
      )
      //engine.addEntity(screen)
     
      // #5
      screen.setParent( building)
      myVideoTexture.play()

}