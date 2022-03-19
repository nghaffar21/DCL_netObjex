import { Button } from "../Prefabs/Button"
export function Buttons(rings)
{this.buttons=[];
let colors=[Color3.Red(),Color3.Yellow(),Color3.Green(),Color3.Blue(),Color3.Magenta()]
for (let index = 0; index < 5; index++) 
{
    let button=new Button(colors[index],index,rings,new Vector3(7.27,1.5,-0.5)) ;
    this.buttons.push(button);
}
}