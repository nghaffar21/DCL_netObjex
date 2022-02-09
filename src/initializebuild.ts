import { Rings } from "./GameObjects/rings"
import { Buttons } from "./GameObjects/buttons"
import { NFT } from "./GameObjects/NFTLogo"

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
    
    let Nft=new NFT(building)
}