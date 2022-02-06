import { Rings } from "./GameObjects/rings"
import { Buttons } from "./GameObjects/buttons"

export function initializebuild(building)
{
    let rings;
    rings=new Rings() ;
    rings.rings.forEach(ring => {
        ring.add(building);
    });

    let buttons;
    buttons=new Buttons(rings) ;
    buttons.buttons.forEach(button => {
        button.add(building);
    });
    
}