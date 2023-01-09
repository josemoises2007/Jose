/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Elsa extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1673200424636", "./Elsa/costumes/1673200424636.png", {
        x: 150,
        y: 199
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    yield* this.sayAndWait(
      "Hola, mi nombre es otake 😄 , ¿el tuyo cual es?",
      2
    );
    yield* this.askAndWait("¿el tuyo cual es?");
    yield* this.sayAndWait("Que nombre tan genial ", 2);
    yield* this.askAndWait("Te gusta mi manga,");
    if (this.answer == "Si") {
      yield* this.thinkAndWait("Eres un enfermó 😐", 2);
    } else {
      if (this.answer == "No") {
        yield* this.sayAndWait("Gracias 🥰 por no verlo", 2);
      }
      if (this.answer == "Me gustas") {
        yield* this.sayAndWait("Gracias tu también a mi", 2);
      }
      if (this.answer == "Arashi") {
        yield* this.sayAndWait(
          "Es mi hermano, hay veces que es muy tierno pero otras no",
          2
        );
      }
      if (this.answer == "Otake") {
        yield* this.sayAndWait("También me gustas", 2);
      }
      if (this.answer == "cristoff") {
        yield* this.sayAndWait(
          "Oh he's weird with his ice and stuff. He's kind though.",
          2
        );
      }
      if (this.answer == "sphen") {
        yield* this.sayAndWait("Oh I like him. He's so cute.", 2);
      }
      if (this.answer == "you") {
        yield* this.sayAndWait("Oh! I knew it!", 2);
      }
      yield* this.askAndWait("Que me quieres preguntar?");
      if (this.answer == "Todo") {
        yield* this.sayAndWait("Gracias ", 2);
        yield* this.sayAndWait("Te lo agradezco ", 2);
        yield* this.sayAndWait("Eres mi primer amor ", 2);
      }
      if (this.answer == "Me gustas ") {
        yield* this.sayAndWait("Gracias yo también te amo", 2);
      }
      if (this.answer == "Eres feo") {
        yield* this.sayAndWait("Por que??😨", 2);
      }
      if (this.answer == "Tienes novia?") {
        yield* this.sayAndWait("No", 2);
        yield* this.sayAndWait("Estoy pensando ", 2);
      }
      if (this.answer == "Me gustas ") {
        yield* this.sayAndWait("Gracias 🥰", 2);
      }
      if (this.answer == "Te quiero ") {
        yield* this.sayAndWait("Y yo te amo", 2);
      }
      yield* this.askAndWait("Como es tu vida?");
      yield* this.sayAndWait(
        "Genial, voy al gimnasio, paso tiempo con mi hermano ",
        4
      );
      yield* this.askAndWait("Tienes poderes ");
      if (this.answer == "Que haces ahora?") {
        yield* this.sayAndWait("Como, como me ves ahora, en el invierno ", 2);
      }
      yield* this.sayAndWait("Yo soy un lobo muy amable ", 2);
      yield* this.sayAndWait("Arashi me llama", 3);
      yield* this.sayAndWait(
        "Esta conversación fue divertida, espero que se repita ",
        2
      );
      yield* this.sayAndWait("Tchau 👋", 2);
    }
  }
}
