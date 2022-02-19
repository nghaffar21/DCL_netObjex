//import {mySystem} from "../System/system"
export class NFT extends Entity
{
    transform2;
    myMaterial:Material;
    constructor(url,position0=new Vector3(0, 0, 0),rotation0=new Quaternion(0, 0, 0, 1))
    {
        super();


    let myEntity =this;

    //myEntity = new Entity()
    const shapeComponent = new NFTShape(
      url
    )
    myEntity.addComponent(shapeComponent)
    myEntity.addComponent(
      new Transform({
        position: position0 ,
        rotation: rotation0,
        scale:new Vector3(10,10,10)
      })
    )


/*myEntity.addComponent(
    new OnPointerDown((e) => {
      log("nft");
    })
  )*/
  this.addComponent(
    new OnPointerDown((e) => {
      openNFTDialog(
        url
      )
    })
  )
  
}

add(enty)
{
//Assign the material to the entity

this.setParent(enty);}
}
