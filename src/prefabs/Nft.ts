export function Nft(url,position,rotation)
{
    const entity = new Entity()
const shapeComponent = new NFTShape(
  url
,
{style:PictureFrameStyle.None}
)
entity.addComponent(shapeComponent)
entity.addComponent(
  new Transform({
    position:new Vector3 (position.x,26,position.z),
    rotation,
    scale:new Vector3(4,4,4)
  })
)

entity.addComponent(
    new OnPointerDown((e) => {
      openNFTDialog(
        url
      )
    })
  )

engine.addEntity(entity)
}
