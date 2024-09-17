kaplay({
  width: 1024,
  height: 768,
  letterbox: true,
  scale: 1,
});
//debug.inspect = true;

loadSprite("hero", "./hero.png")
const hero = add([
  sprite("hero"),
  pos(width() * 0.5, height() * 0.5),
  area(),
  body(),
  scale(0.1),
  anchor("center"),
  {
    speed: 200,
  },
]);

hero.onKeyDown((key) => {
  if (key === "right") {
    hero.move(hero.speed, 0)
  }
});

hero.onKeyDown((key) => {
  if (key === "left") {
    hero.move(-hero.speed, 0)
  }
});

hero.onKeyDown((key) => {
  if (key === "up") {
    hero.move(0, -hero.speed,)
  }
});

hero.onKeyDown((key) => {
  if (key === "down") {
    hero.move(0, hero.speed)
  }
});

