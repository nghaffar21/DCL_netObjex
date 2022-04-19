import { Diamonds } from "./gameobjects/Dianonds";
import { Elevator } from "./gameobjects/Elevator";
import { Nfts } from "./gameobjects/Nfts";

export function Initialise(building)
{
    building.addComponent(new Animator())
    new Nfts();
    new Diamonds(building);
    new Elevator(building);
}