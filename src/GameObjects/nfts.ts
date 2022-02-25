import { NFT } from "../Prefabs/Nft"
import { NftTriger } from "./NftTriger";
export function NFTs(building)
{
   this.addnftdelay=function(t,k,maxt,i,j)
  {
    if(!t.activeFloors.includes(j))
    return;
    log("creat nft");
if(maxt <= k)
return;
    let nftData=t.filedata["floor"+j][i][k];
        let s=nftData.scale||new Vector3(9,5.5,10);
        let p=nftData.position||new Vector3((i%2==0?0:1)+(i<=1?59:-11.25)-5.9*k,ys[j],12.7-24.85*(i%2))
        if(nftData.link!=undefined)
          {
            let nft=new NFT(nftData.link,p,Quaternion.Euler(0,i*180,0),s);
            t.nftsFloor[j].push(nft);
            nft.add(building)
          };
    setTimeout(()=>t.addnftdelay(t,k+1,maxt,i,j), 500);
}
  this.nftsFloor=[[],[],[],[]];
  this.activeFloors=[-1,-1];
  //this.addnftdelay(0);
  this.addfloorNfts=numberFlor=>
  {

    if(this.activeFloors.includes(numberFlor))
    return;
    let j=numberFlor;
    for (let i = 0; i < this.filedata["floor"+j].length; i++) 
    {
      setTimeout(()=>this.addnftdelay(this,0,this.filedata["floor"+j][i].length,i,j),500)
      /*for (let k = 0; k < this.filedata["floor"+j][i].length; k++)
      {
        let nftData=this.filedata["floor"+j][i][k];
        let s=nftData.scale||new Vector3(9,5.5,10);
        let p=nftData.position||new Vector3((i%2==0?0:1)+(i<=1?59:-11.25)-5.9*k,ys[j],12.7-24.85*(i%2))
        if(nftData.link!=undefined)
          {
            let nft=new NFT(nftData.link,p,Quaternion.Euler(0,i*180,0),s);
            this.nftsFloor[j].push(nft);
            nft.add(building)
          };
      }*/
    }
    log("add floor",numberFlor);
  };
  this.removefloorNfts=numberFlor=>
  {
    if(!this.activeFloors.includes(numberFlor))
    return;
    this.nftsFloor[numberFlor].forEach(element => {
      log(element);
      element.setParent(null);
      engine.removeEntity(element);
    });
    log("remove floor",numberFlor);
    this.nftsFloor[numberFlor]=[];
  };
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
  ],
  "floor2":[
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
    "floor3":[
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
      ],};
  let ys=[3,11,16,20];
for(let j=0; j<=1; j++)
{
  this.addfloorNfts(j);
}
this.activeFloors=[0,1];
for (let index = 0; index < 4; index++) 
{
  let y=7.2+(index-1)*3.5;
  let dy=3;
  if(index==0)
  {dy=5.5
    y=2.3
  }
  new NftTriger(building,()=>this.visitfloor(index),y,dy);
}
this.visitfloor=function(i)
{
  log("process floor",i);
  if(i==0)
  {

    this.removefloorNfts(2);
    this.removefloorNfts(3);
    this.addfloorNfts(0);
    this.addfloorNfts(1);
    this.activeFloors=[0,1];
  }
  else if(i==3)
  {

    this.removefloorNfts(1);
    this.removefloorNfts(0);
    this.addfloorNfts(2);
    this.addfloorNfts(3);
    this.activeFloors=[2,3];
  }
  else if(i==1)
  {
    let a=2;
    let b=0;
    if(this.activeFloors.includes(b))
    {
      a=0;
      b=2;
    }
    this.removefloorNfts(3);
    this.removefloorNfts(b);
    this.addfloorNfts(a);
    this.addfloorNfts(1);
    this.activeFloors=[1,a];
  }
  else if(i==2)
  {
    let a=1;
    let b=3;
    if(this.activeFloors.includes(b))
    {
      a=3;
      b=1;
    }
    this.removefloorNfts(0);
    this.removefloorNfts(b);
    this.addfloorNfts(a);
    this.addfloorNfts(2);
    this.activeFloors=[2,a];
  }
}
//this.nfts.push(new NFT("ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/3331647851444087618740877131728775675870169111580198972195870085376815136769",new Vector3(10,15,-12),Quaternion.Euler(0,180,0),new Vector3(40,20,10)));
}
