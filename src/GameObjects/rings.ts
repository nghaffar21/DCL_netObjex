import { Ring } from "../Prefabs/Ring"
export function Rings()
{this.rings=[];
this.colors=[Color3.Red(),Color3.Yellow(),Color3.Green(),Color3.Blue(),Color3.Magenta()]
for (let index = 0; index < 5; index++) 
{
    let ring=new Ring(this.colors[index],index,new Vector3(9,25,0)) ;
    this.rings.push(ring);
}
}