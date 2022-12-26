onEvent('item.tags', (event) => {
    event
        .get('jmm:candle_materials')
        .add('minecraft:honeycomb')
        .add('resourcefulbees:wax')
        .add('occultism:tallow');
});
