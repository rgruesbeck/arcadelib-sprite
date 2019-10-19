# Sprite
a flexible base sprite for use in browser games.

## Features
- [object-pool](https://gameprogrammingpatterns.com/object-pool.html) for free
- attach your own render method to each sprite
- sprite methods are chain-able


## Usage

### create one sprite
```js
    // create one sprite
    const sprite = createSprite(opts, renderMethod);
```

### create a pool of n sprites
```js
    // create a pool of 10 sprites
    const spritePool = createSprites(opts, renderMethod, 10);
```

### find an available sprite in a pool
```js
    // find available sprites
    const availableSprite = findAvailable(spritePool);
```

### take at most n sprites
```js
    // take at most 5 available sprites
    const availableSprites = takeAvailable(spritePool, 5);
```

### update
update sprite state
```js
    sprite.update((state) => {
        // increment y position by 1
        return {
            position: [state.position[0], state.position[1] + 1]
        };
    })
```

### then
update sprite state
```js
    sprite
    .update(state => {
        // increment x position by 1
        return {
            position: [state.position[0] + 1, state.position[1]]
        };
    })
    .then(sprite => {
        // do something with sprite
    })
```

### render
calls the sprite's render method
```js
    sprite.render();
```

### move
convenience method for moving (updating position)
```js
    // move to (x + 1, y - 1)
    sprite2D.move(1, -1);

    // move to (x + 1, y - 1, z + 1)
    sprite3D.move(1, -1, 1);

```