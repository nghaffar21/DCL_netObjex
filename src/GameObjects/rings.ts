import { Ring } from "../Prefabs/Ring"
export function Rings()
{//this.ring;
this.colors=[Color3.Red(),Color3.Yellow(),Color3.Green(),Color3.Blue(),Color3.Magenta()]
this.ring=new Ring(null,new Vector3(0,0,0)) ;
}