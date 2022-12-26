onEvent('entity_type.tags', (event) => {
    let entities = ['alexsmobs:dropbear'];
    event.get('jmm:dropbears').add(entities);
});
