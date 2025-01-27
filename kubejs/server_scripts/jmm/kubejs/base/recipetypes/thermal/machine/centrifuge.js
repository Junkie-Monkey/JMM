onEvent('recipes', (event) => {
    const id_prefix = 'jmm:base/thermal/centrifuge/';
    const recipes = [
        {
            input: '#forge:ores/bitumen',
            outputs: [
                Item.of('minecraft:gravel').withChance(0.75),
                Item.of('emendatusenigmatica:bitumen_gem').withChance(1.5),
                Item.of('thermal:tar').withCount(1),
                Fluid.of('pneumaticcraft:oil', 100)
            ],
            energy: 400,
            id: `${id_prefix}meat`
        },
        {
            input: 'tconstruct:blood_slime_leaves',
            outputs: [
                Item.of('minecraft:nether_wart').withChance(1.5),
                Item.of('tconstruct:blood_slime_sapling').withChance(0.1),
                Item.of('tconstruct:ichor_slime_ball').withChance(0.25),
                Fluid.of('tconstruct:blood', 50)
            ],
            energy: 400,
            id: `${id_prefix}nether_wart`
        },
        {
            input: 'minecraft:honey_bottle',
            outputs: [Item.of('minecraft:glass_bottle').withCount(1), Fluid.of('resourcefulbees:honey', 250)],
            energy: 400,
            id: `thermal:machine/centrifuge/centrifuge_honey_bottle`
        }
    ];

    honeyVarieties.forEach((honeyVariety) => {
        if (honeyVariety == 'resourcefulbees:honey') {
            return;
        }

        let honey = honeyVariety.split(':')[1];
        recipes.push({
            input: Item.of(`${honeyVariety}_bottle`),
            outputs: [Item.of('minecraft:glass_bottle'), Fluid.of(honeyVariety, 250)],
            energy: 400,
            id: `${id_prefix}honey/${honey}`
        });
    });

    recipes.forEach((recipe) => {
        event.recipes.thermal.centrifuge(recipe.outputs, recipe.input).energy(recipe.energy).id(recipe.id);
    });
});
