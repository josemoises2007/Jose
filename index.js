import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Elsa from "./Elsa/Elsa.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Elsa: new Elsa({
    x: 41.749468635110276,
    y: -51.29272101907168,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
