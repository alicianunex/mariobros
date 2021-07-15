kaboom({
  global: true,
  fullscreen: true,
  scale: 2,
  debug: true,
  clearColor: [0, 0, 0, 1],
});

scene('game', ({ level, score }) => {
  layers(['bg', 'obj', 'ui'], 'obj');
});
start('game', { level: 0, score: 0 });
