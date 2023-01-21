onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'prettypipes:crafting_terminal',
            inputs: ['prettypipes:item_terminal', 'prettypipes:low_crafting_module'],
            id: 'prettypipes:crafting_terminal'
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
