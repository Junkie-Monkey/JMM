onEvent('item.tags', (event) => {
    stonecuttables.forEach((stoneType) => {
        event.add(`chisel:${stoneType.name}`, [`#jmm:stonecuttables/${stoneType.name}`]);
    });
});
