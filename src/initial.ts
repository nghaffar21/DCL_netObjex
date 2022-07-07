import { Diamonds } from "./gameobjects/Dianonds";
import { Elevator } from "./gameobjects/Elevator";
import { Lamp } from "./gameobjects/Lamp";
import { Nfts } from "./gameobjects/Nfts";
import { Paneles } from "./gameobjects/Panels";

export function Initialise(building)
{
    building.addComponent(new Animator())
    new Nfts();
    new Diamonds(building);
    new Elevator(building);
    new Paneles(building);
    new Lamp(building)
}
