onEvent('entity_type.tags', (event) => {
    let entities = ['#jmm:mob_spawner_blacklist'];
    event.get('pneumaticcraft:vacuum_trap_blacklisted').add(entities);
});
