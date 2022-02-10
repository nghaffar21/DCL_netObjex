import {mySystem} from "../System/system"
export function NFT(building)
{
    const myEntity=new Entity();
    const spinVitess=1;
    let rot=0;
    myEntity.addComponentOrReplace(new GLTFShape("modeles/NFT.glb"))
    this.transform2 = new Transform({
        position: new Vector3(10,-20,0),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1.5, 1.5, 1.5)
    })
  myEntity.addComponentOrReplace(this.transform2)
    this.update=function()
    {
        rot+=spinVitess;
        myEntity.getComponent(Transform).rotation.setEuler(0, rot, 0)
    }
    myEntity.setParent(building);
    mySystem.GameObjects.push(this);
}