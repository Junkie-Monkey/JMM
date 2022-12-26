onEvent('item.tags', (event) => {
    stonecuttables.forEach((stoneType) => {
        let tag = `jmm:stonecuttables/${stoneType.name}`;
        event.add('jmm:stonecuttables', ['#' + tag]);
        event.add(tag, stoneType.stones);
        event.add(tag, stoneType.onlyAsInput);
    });
});
