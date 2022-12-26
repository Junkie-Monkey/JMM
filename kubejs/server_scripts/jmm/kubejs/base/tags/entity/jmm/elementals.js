onEvent('entity_type.tags', (event) => {
    let entities = ['minecraft:blaze', 'thermal:blizz', 'thermal:blitz', 'thermal:basalz'];
    event.get('jmm:elementals').add(entities);

    event.get('jmm:elementals/fire').add('minecraft:blaze');
    event.get('jmm:elementals/water').add('thermal:blizz');
    event.get('jmm:elementals/air').add('thermal:blitz');
    event.get('jmm:elementals/earth').add('thermal:basalz');
});
