import { setTimeout } from "@dcl/ecs-scene-utils";
import { links } from "src/resource/nftslinks";
import { NFT } from "../Prefabs/Nft"
import { NftTriger } from "./NftTriger";
export function NFTs(building)
{
  let yms=[3,10.5,15.5,19.5,25.5];
   this.addnftdelay=function(t,k,maxt,i,j)
  { 
    for(let k=0;k<maxt;k++)
    {
    if(!t.activeFloors.includes(j))
    return;
    if(maxt <= k)
      return;
    let nftData=t.filedata["floor"+j][i][k];
        let s=nftData.scale||new Vector3(9,5.5,10);
        let p;
        if(j==4 && i<4)
        continue
        if(j==5)
        { 
          s=nftData.scale||new Vector3(30,20,20);
          if(i<=1)
            p=nftData.position||new Vector3(-56.5+(19.7*k),ys[j],(i==0?15:-15))
          else
            p=nftData.position||new Vector3((i==2?-66:70),ys[j],0)
        }
        else if(i>=4)
        { 
           if(j==0)
           {
             if(i>=6)
              if(k>=4)
              continue;
           }
           else if(j==1)
           {
             if(i>=6)
             {
                if(k>=4)
                continue;
             }
             else
             {
               if(k<=0)
                continue;
             }
           }
           else if(j==2 || j==3)
           {
             if(i>=6)
             {
                if(k>=4)
                continue;
             }
           }
           else if(j==4)
           {
             if(i==7) 
             {
                if(k>=5)
                continue;
             }
           }
           p=nftData.position||new Vector3((i%2==0?0.9:1)+(i<=5?62.9:-15.47)-7.85*k,yms[j],-4.5)
           if(j==4)
           p=nftData.position||new Vector3((i%2==0?0.9:1.05)+(i<=5?62.9:-15.47)-7.85*k,yms[j],-4.5)
        }
        else
          p=nftData.position||new Vector3((i%2==0?0:1)+(i<=1?59:-11.25)-5.9*k,ys[j],12.7-24.85*(i%2))
        if(nftData.link!=undefined)
          {
            let nft
            if(j==5 && i>1)
            nft=new NFT(nftData.link,p,Quaternion.Euler(0,(i==3?90:-90),0),s);
            else
            nft=new NFT(nftData.link,p,Quaternion.Euler(0,(i<=3?(i*180):(90+(i%2)*-180)),0),s);
            t.nftsFloor[j].push(nft);
            nft.add(building)
          };
        }
    //setTimeout(()=>t.addnftdelay(t,k+1,maxt,i,j), 500);
}
  this.nftsFloor=[[],[],[],[],[],[]];
  this.activeFloors=[-1,-1];
  //this.addnftdelay(0);
  this.addfloorNfts=numberFlor=>
  {

    if(this.activeFloors.includes(numberFlor))
    return;
    let j=numberFlor;
    for (let i = 0; i < this.filedata["floor"+j].length; i++) 
    {
      setTimeout(0,()=>this.addnftdelay(this,0,this.filedata["floor"+j][i].length,i,j))
      //this.addnftdelay(this,0,this.filedata["floor"+j][i].length,i,j);
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
    //log("add floor",numberFlor); 
  };
  this.removefloorNfts=numberFlor=>
  {
    if(!this.activeFloors.includes(numberFlor))
    return;
    this.nftsFloor[numberFlor].forEach(element => {
      //log(element);
      element.setParent(null);
      engine.removeEntity(element);
    });
    //log("remove floor",numberFlor);
    this.nftsFloor[numberFlor]=[];
  };
  this.data={};
  this.nfts=[];
  /*let rawdata = readFileSync('nftslinks.json');
let links = JSON.parse(rawdata);*/
    this.filedata= links;


  let ys=[3,11,16,20,24,77];
for(let j=0; j<1; j++)
{
  this.addfloorNfts(j);
}
this.activeFloors=[0,1];
for (let index = 0; index < 6; index++) 
{
  let y=9+(index-1)*5;
  let dy=1;
  if(index==0)
  {dy=1
    y=1
  }
  if(index==5)
    y=66
    dy/=5
  new NftTriger(building,()=>this.visitfloor(index),y,dy);
  new NftTriger(building,()=>this.visitfloor(index),y+2,dy);
}
this.visitfloor=function(i)
{
  //log("process floor",i);
  for (let index = 0; index < 6; index++) {
    //log(i!=index,i,index)
    if(i!=index)
    this.removefloorNfts(index);
    else
    this.addfloorNfts(index);
  }
  this.activeFloors=[i];
  return;
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
