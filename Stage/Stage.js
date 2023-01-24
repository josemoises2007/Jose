/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("images (12)", "./Stage/costumes/images (12).png", {
        x: 1000,
        y: 1000
      })
    ];

    this.sounds = [
      new Sound(
        "DAMAGE - EGYPT(MP3_70K)",
        "./Stage/sounds/DAMAGE - EGYPT(MP3_70K).mp3"
      )
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    yield* this.playSoundUntilDone("DAMAGE - EGYPT(MP3_70K)");
  }
}
