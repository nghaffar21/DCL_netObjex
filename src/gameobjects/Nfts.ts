import { links } from "src/nftslinks";
import { Nft } from "src/prefabs/Nft";

export function Nfts()
{ 
    for(let i=0;i<8;i++)
        new Nft(links.floor0[0][i].link,new Vector3(i*3-11, 1.5, 1.5),Quaternion.Euler(0,180,0));
    for(let i=0;i<8;i++)
    //for(let i=0;i<5;i++)
        if(i*3-11<=-5 || i*3-11>=7)
            new Nft(links.floor0[1][i].link,new Vector3(i*3-11, 1.5, 14),Quaternion.Euler(0,0,0));
    for(let i=0;i<4;i++)
        new Nft(links.floor0[2][i].link,new Vector3(14, 1.5, i*4+3),Quaternion.Euler(0,90,0));
    for(let i=0;i<4;i++)
        new Nft(links.floor0[3][i].link,new Vector3(-14, 1.5, i*4+3),Quaternion.Euler(0,-90,0));    
}