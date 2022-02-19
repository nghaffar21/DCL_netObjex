import { NFT } from "../Prefabs/Nft"
export function NFTs()
{this.nfts=[];
this.nftLinks=["ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536",
"ethereum://0x06012c8cf97bead5deae237070f9587f8e7a266d/2010925",
"ethereum://0x06012c8cf97bead5deae237070f9587f8e7a266d/2010924",
"ethereum://0x06012c8cf97bead5deae237070f9587f8e7a266d/2010923"]
for (let index = 0; index < this.nftLinks.length; index++) 
{
  this.nfts.push(new NFT(this.nftLinks[index],new Vector3(-10-10*index,3,12)));
}
}