export function Nft(url,position)
{
    const entity = new Entity()
const shapeComponent = new NFTShape(
  url
,)
entity.addComponent(shapeComponent)
entity.addComponent(
  new Transform({
    position,
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
