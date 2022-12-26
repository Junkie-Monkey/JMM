onEvent('block.tags', (event) => {
    event.get('jmm:cobbleworks/stone').add(generatableStone);
    event.get('jmm:cobbleworks/cobblestone').add(generatableCobblestone);
    event.get('jmm:cobbleworks/basalt').add(generatableBasalt);
});
