import { VideoPrefab } from "src/Prefabs/Video";


export function VideoScene(building) 
{   
  VideoPrefab(building,"src/resource/video.mp4");
  VideoPrefab(building,"src/resource/video.mp4",new Vector3(70, 32, 0),Quaternion.Euler(0,-90,0),false,true);
  VideoPrefab(building,"src/resource/video.mp4",new Vector3(-50, 32, 0),Quaternion.Euler(0,90,0),false);
}