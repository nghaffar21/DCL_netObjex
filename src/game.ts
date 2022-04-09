import { Initialise } from "./initial";

const _scene = new Entity('_scene')
const transform = new Transform({
    position: new Vector3(0, -0.4, 8.5),
    rotation:  Quaternion.Euler(0, 0, 0),
    scale: new Vector3(0.9, 1, 0.9)
  })
  _scene.addComponent(transform)
  _scene.addComponent(new GLTFShape("models/WithBlueRoof.glb"))
engine.addEntity(_scene);

Initialise(_scene);



