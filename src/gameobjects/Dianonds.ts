import { links } from "src/nftslinks";
import { Diamond } from "src/prefabs/Diamond";

export function Diamonds(building) 
{
    new Diamond(building,new Vector3(-12.5, 13.5, 5.3),links.floor0[4][0].link,1);
    new Diamond(building,new Vector3(-12.5, 13.5, 2.5),links.floor0[5][0].link,2);
    new Diamond(building,new Vector3(-10, 13.5, 5.3),links.floor0[6][0].link,3);
    new Diamond(building,new Vector3(-10, 13.5, 2.5),links.floor0[7][0].link,4);
}