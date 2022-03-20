import { VideoPrefab } from "src/Prefabs/Video";


export function VideoScene(building)
{   
  VideoPrefab(building);
  VideoPrefab(building,"videos/video.mp4",new Vector3(10, 15, 12),Quaternion.Euler(0,180,0),false);
}