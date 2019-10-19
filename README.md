# Sprite
a flexible base sprite for use in browser games.

- [object-pool](https://gameprogrammingpatterns.com/object-pool.html) for free
- attach your own render method to each sprite
- sprite methods are then-able


## create one sprite
```js
    // create one sprite
    const sprite = createSprite(opts, renderMethod);
```

## create a pool of n sprites
```js
    // create a pool of n sprites (10)
    const spritePool = createSprites(opts, renderMethod, 10);
```

## find an available sprite in a pool
```js
    // find an available sprite in a pool
    const availableSprite = findAvailable(spritePool);
```

## take at most n sprites
```js
    // take at most n sprites (5)
    const availableSprites = takeAvailable(spritePool, 5);
```