import { NFT } from "../Prefabs/Nft"
export function NFTs()
{this.nfts=[];
this.nftLinks=[
"ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536",
"ethereum://0x06012c8cf97bead5deae237070f9587f8e7a266d/2010925",
"ethereum://0x06012c8cf97bead5deae237070f9587f8e7a266d/2010924",
"ethereum://0x06012c8cf97bead5deae237070f9587f8e7a266d/2010923"
]
for (let index = 0; index < this.nftLinks.length; index++) 
{
  this.nfts.push(new NFT(this.nftLinks[index],new Vector3(-10-10*index,3,12)));
}
this.nfts.push(new NFT("ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/3331647851444087618740877131728775675870169111580198972195870085376815136769",new Vector3(10,15,-12),Quaternion.Euler(0,180,0),new Vector3(40,20,10)));
}