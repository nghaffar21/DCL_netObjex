import { Rings } from "./GameObjects/rings"
import { Buttons } from "./GameObjects/buttons"
import { NFTLogo } from "./GameObjects/NFTLogo"
import { Elvator } from "./GameObjects/Elvator"
import { NFTs } from "./GameObjects/nfts"
import { Music } from "./GameObjects/sound"

export function initializebuild(building)
{
    //rings
    let rings;
    rings=new Rings() ;
    rings.rings.forEach(ring => {
        ring.add(building);
    });

    //buttons
    let buttons;
    buttons=new Buttons(rings) ;
    buttons.buttons.forEach(button => {
        button.add(building);
    });
    
    //nft logo
    let Nft=new NFTLogo(building);

    //elvator
    let elvator=new Elvator(building,[0,7.8,12.8,17.8,22.8,60]);

    //nfts
    let nfts=new NFTs(building);
    /*let maxnft=80; 
    let i=0;
    nfts.nfts.forEach(element => {
        i++;
        if(i<maxnft)
        {element.add(building);
            
       // if(i>=10)
       // engine.removeEntity(nfts.nfts[i-10])
    }
    });*/
    //nfts.nfts[1].setParent(building);
    //music
    new Music(building);
    
  
} 