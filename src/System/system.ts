
 class MySystem implements ISystem {
    //Executed ths function on every frame
    constructor()
    {
        engine.addSystem(this);
    }
    GameObjects=[];
    update() {
        this.GameObjects.forEach(element => {
            element.update();
      });
      }
    }

    const mySystem=new MySystem();
    export {mySystem};

    