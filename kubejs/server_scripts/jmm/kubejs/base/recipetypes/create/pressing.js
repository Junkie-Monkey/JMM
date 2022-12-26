onEvent('recipes', (event) => {
    const id_prefix = 'jmm:base/create/pressing/';

    const recipes = [
        {
            output: 'mekanism:hdpe_sheet',
            inputs: ['mekanism:hdpe_pellet'],
            id: `${id_prefix}hdpe_sheet`
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.create.pressing(recipe.output, recipe.inputs).id(recipe.id);
    });
});
