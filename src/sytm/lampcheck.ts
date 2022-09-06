export class LampSystem implements ISystem {
  lamp;
  state:"on"
  look
  update() {
   // 
    
    let callUrl="https://6ndtux65mn7xfpija7hha2xn7y0mvjnr.lambda-url.us-east-2.on.aws/"
    if(this.lamp.canClick && !this.look)        
    {
      this.look=true;
      executeTask(async () => {
            //  if(this.look)
              
    try { 

      log("can look",this.look)
      
      log("can click",this.lamp.canClick)
        let response = await fetch(callUrl,{
        method: "POST",
        body: JSON.stringify({
          toogle: false})
      })
        let json = await response.json()
        log("json: ",json.body,this.state)
        if(json.body!=this.state)
        {
          this.state=json.body
          this.lamp.animator.getClip(json.body=="off"?"off":"on").play();
        }
      } catch {
        log("failed to reach update URL")
 
      }  
      this.look=false;

            
  }
)}


}
}
