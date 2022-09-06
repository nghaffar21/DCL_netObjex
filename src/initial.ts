
import { Diamonds } from "./gameobjects/Dianonds";
import { Elevator } from "./gameobjects/Elevator";
import { Lamp } from "./gameobjects/Lamp";
import { Nfts } from "./gameobjects/Nfts";
import { Paneles } from "./gameobjects/Panels";
import { LampSystem } from "./sytm/lampcheck";

export function Initialise(building)
{
    building.addComponent(new Animator())
    new Nfts();
    new Diamonds(building);
    new Elevator(building);

   const lmp= new Lamp(building) 
    new Paneles(building);
 const sy=new LampSystem();
 sy.lamp=lmp
 sy.look=false
    engine.addSystem(sy)
 

 




    
 
    let callUrl="https://6ndtux65mn7xfpija7hha2xn7y0mvjnr.lambda-url.us-east-2.on.aws/"
            
}
