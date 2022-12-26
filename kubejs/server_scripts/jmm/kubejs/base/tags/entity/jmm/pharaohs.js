onEvent('entity_type.tags', (event) => {
    let entities = ['atum:pharaoh'];
    event.get('jmm:pharaohs').add(entities);
});
