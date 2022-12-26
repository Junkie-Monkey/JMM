onEvent('entity_type.tags', (event) => {
    let entities = ['alexsmobs:rattlesnake'];
    event.get('jmm:rattlesnakes').add(entities);
});
