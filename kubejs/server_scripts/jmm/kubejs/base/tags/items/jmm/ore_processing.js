onEvent('item.tags', (event) => {
    metals.forEach((metal) => {
        event.get(`jmm:mana_clusters`).add(`kubejs:suffused_${metal}`);
        event.get(`jmm:mana_clusters/${metal}`).add(`kubejs:suffused_${metal}`);

        event.get(`jmm:fulminated_clusters`).add(`kubejs:fulminated_${metal}`);
        event.get(`jmm:fulminated_clusters/${metal}`).add(`kubejs:fulminated_${metal}`);

        event.get(`jmm:levigated_materials`).add(`kubejs:levigated_${metal}`);
        event.get(`jmm:levigated_materials/${metal}`).add(`kubejs:levigated_${metal}`);

        event.get(`jmm:crystalline_slivers`).add(`kubejs:sliver_${metal}`);
        event.get(`jmm:crystalline_slivers/${metal}`).add(`kubejs:sliver_${metal}`);
    });
});
