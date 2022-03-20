import { VideoPrefab } from "src/Prefabs/Video";


export function VideoScene(building) 
{   
  VideoPrefab(building,"src/resource/video.mp4");
  VideoPrefab(building,"src/resource/video.mp4",new Vector3(10, 28, 12.9),Quaternion.Euler(0,180,0),false);
}