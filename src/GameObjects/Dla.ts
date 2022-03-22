export function DLA()
{const entity = new Entity()
entity.addComponent(new BoxShape())

const transform = new Transform({ position: new Vector3(8, 0.5, 33) })
entity.addComponent(transform)
let myMaterial=new Material()
myMaterial.albedoColor=new Color4(0,0,0,0)
entity.addComponent(myMaterial)
entity.addComponent(
  new OnPointerDown(() => {
    openExternalURL("https://www.digitalandarchitects.com/")
  })
)
engine.addEntity(entity)}