onEvent('entity_type.tags', (event) => {
    let entities = ['botania:doppleganger'];
    event.get('jmm:gaia_guardian').add(entities);
});
