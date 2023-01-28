onEvent('chest.loot_tables', event => {
    event.modify('minecraft:end_city_treasure', table => {
        table.addPool(pool => {
            pool.rolls = 1
            pool.bonusRolls = 1
            pool.addCondition({
                "condition": "minecraft:random_chance",
                "chance": 0.15
            })
            pool.addItem('woot:exotic_a', 4)
            pool.addItem('woot:exotic_b', 4)
            pool.addItem('woot:exotic_c', 2)
            pool.addItem('woot:exotic_d', 1)
            pool.addItem('woot:exotic_e', 1)
        })
    })
})
