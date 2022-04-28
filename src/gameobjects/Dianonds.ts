import { Diamond } from "src/prefabs/Diamond";

export function Diamonds(building) 
{
    new Diamond(building,new Vector3(-12.5, 13.5, 5.3),"https://www.google.com",1);
    new Diamond(building,new Vector3(-12.5, 13.5, 2.5),"https://www.google.com",2);
    new Diamond(building,new Vector3(-10, 13.5, 5.3),"https://www.google.com",3);
    new Diamond(building,new Vector3(-10, 13.5, 2.5),"https://www.google.com",4);
}