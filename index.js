// Sprite Prototype
const SpritePrototype = {
    // sprite attributes
    active: true,
    renderDepth: 0,
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    velocity: [0, 0, 0],
    dimension: [100, 100, 100],
    // initialize
    init: function(opts) {
        this.id = Math.random().toString(16).slice(2);

        return this.set(opts);
    },
    // set position, rotation, and size
    set: function(values) {

        if (values.active !== undefined) { this.active = values.active; };
        if (values.data) { this.data = { ...this.data, ...values.data }; };
        if (values.renderDepth) { this.renderDepth = values.renderDepth; };
        if (values.position) { this.position = values.position; };
        if (values.rotation) { this.rotation = values.rotation; };
        if (values.velocity) { this.velocity = values.velocity; };
        if (values.dimension) { this.dimension = values.dimension; };
	
        return this;
    },
    // update with a function
    update: function(fn) {
        if (!fn && !(typeof fn === 'function')) { return this; }

        let updates = fn(this);
        return this.set(updates);
    },
    // move some distance
    move: function(...args) {
        return this.set({
		position: this.position
		.map((p, idx) => p + args[idx])
	});
    },
    // do something
    then: function(fn) {
        if (!fn && !(typeof fn === 'function')) { return; }

        fn(this);
        return this;
    },
    // call render method
    render: function(opts) {
        if (!this.active) { return; }

        this.renderMethod.call(this, opts);
    }
}

// create a sprite
const createSprite = ({
    active = true,
    data = {},
    position,
    dimension,
    rotation,
    velocity
}, renderMethod) => {
    return Object.create(SpritePrototype, {
        active: {
            writable: true,
            value: active
        },
        data: {
            writable: true,
            value: data
        },
        renderMethod: {
            writable: true,
            value: renderMethod
        }
    }).init({ position, dimension, rotation, velocity });
};

// create a list of sprites
const createSprites = (options, renderMethod, n) => {
    return Array.apply(null, { length: n })
    .map(() => createSprite(options, renderMethod));
}

// find an available sprite
const findAvailable = (sprites) => {
    return sprites.find(s => !s.active);
}

// take available sprites
const takeAvailable = (sprites, n) => {
    if (n === undefined) {

        return findAvailable(sprites);
    } else {

        return sprites
        .filter(s => !s.active)
        .filter((s, idx) => idx < n);
    }
}