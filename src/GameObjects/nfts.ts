import { NFT } from "../Prefabs/Nft"
export function NFTs()
{
  this.data={};
  this.nfts=[];
this.filedata=
{"floor0":[
[ {link:"ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"},
  {link:"ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"},
  {link:"ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"},
  {link:"ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"},
  {link:"ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"},
  {link:"ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"}
],
[ {link:"ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"},
  {link:"ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"},
  {link:"ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"},
  {link:"ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"},
  {link:"ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"},
  {link:"ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"}
],
[ {link:"ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"},
  {link:"ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"},
  {link:"ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"},
  {link:"ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"},
  {link:"ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"},
  {link:"ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"}
],
[ {link:"ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"},
  {link:"ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"},
  {link:"ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"},
  {link:"ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"},
  {link:"ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"},
  {link:"ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"}
]
],
"floor1":[
  [ {link:"ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"},
    {link:"ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"},
    {link:"ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"},
    {link:"ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"},
    {link:"ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"},
    {link:"ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"}
  ],
  [ {link:"ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"},
    {link:"ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"},
    {link:"ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"},
    {link:"ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"},
    {link:"ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"},
    {link:"ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"}
  ],
  [ {link:"ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"},
    {link:"ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"},
    {link:"ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"},
    {link:"ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"},
    {link:"ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"},
    {link:"ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"}
  ],
  [ {link:"ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"},
    {link:"ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"},
    {link:"ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"},
    {link:"ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"},
    {link:"ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"},
    {link:"ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"}
  ]
  ]};
  let ys=[3,11];
for(let j=0; j<=0; j++)
{
    for (let i = 0; i < this.filedata["floor"+j].length; i++) 
  {
    for (let k = 0; k < this.filedata["floor"+j][i].length; k++)
    {
      let nftData=this.filedata["floor"+j][i][k];
      let s=nftData.scale||new Vector3(9,5.5,10);
      let p=nftData.position||new Vector3((i<=1?60:-11.25)-5.9*k,ys[j],12.5-25*(i%2))
      if(nftData.link)
        this.nfts.push(new NFT(nftData.link,p,Quaternion.Euler(0,i*180,0),s));
    }
  }
}
//this.nfts.push(new NFT("ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/3331647851444087618740877131728775675870169111580198972195870085376815136769",new Vector3(10,15,-12),Quaternion.Euler(0,180,0),new Vector3(40,20,10)));
}
