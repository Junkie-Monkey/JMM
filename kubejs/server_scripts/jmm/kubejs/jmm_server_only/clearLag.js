//priority: 1100

let runCL = true;
let minutesCL = 30;
let allowlist = Ingredient.matchAny([
    `minecraft:diamond`,
    `minecraft:gold_ingot`,
    `minecraft:netherite_scrap`,
    `minecraft:netherite_ingot`,
    `minecraft:emerald`,
    `#forge:ores`,
    `@tinkersconstruct`,
    `@draconicevolution`,
    `@mekanism`
]);

let lastClearResult = Utils.newCountingMap();

/**
 * Clears the items that are dropped on the ground (that are not in the allowlist)
 * @param {ServerJS} server
 */
const clearLag = (server) => {
    const itemList = server.getEntities(`@e[type=item]`);
    lastClearResult.clear();

    itemList.forEach((entity) => {
        if (!allowlist.test(entity.item)) {
            const itemName = entity.item.name;
            const itemCount = entity.item.count;
            lastClearResult.add(itemName, itemCount);
            entity.kill();
        }
    });

    server.tell([Text.lightPurple('[ClearLag]'), ` Removed ${lastClearResult.totalCount} items from the ground.`]);
};

/**
 * Schedules the clearLag function to be executed every X minutes [Default = every 30 minutes]
 * @param {ServerJS} server
 */
const clearLagLoop = (server) => {
    server.tell([Text.lightPurple('[ClearLag]'), ` Timer started!`]);
    server.tell([Text.lightPurple('[ClearLag]'), ` Removing all items on ground in ${minutesCL} minutes!`]);
    server.schedule(MINUTE * (minutesCL - 6), (callback) => {
        if (runCL) {
            server.tell([Text.lightPurple('[ClearLag]'), ' Removing all items on ground in 5 minutes!']);
            server.schedule(MINUTE * 4, () => {
                if (runCL) {
                    server.runCommand(`tellraw @a "§d[ClearLag]§r Removing all items on ground in 1 minute!"`);
                    server.schedule(SECOND * 50, () => {
                        if (runCL) {
                            server.tell([
                                Text.lightPurple('[ClearLag]'),
                                ' Removing all items on ground in 10 seconds!'
                            ]);
                            server.schedule(SECOND * 7, () => {
                                if (runCL) {
                                    server.tell([
                                        Text.lightPurple('[ClearLag]'),
                                        ' Removing all items on ground in 3 seconds!'
                                    ]);
                                    server.schedule(SECOND * 1, () => {
                                        if (runCL) {
                                            server.tell([
                                                Text.lightPurple('[ClearLag]'),
                                                ' Removing all items on ground in 2 seconds!'
                                            ]);
                                            server.schedule(SECOND * 1, () => {
                                                if (runCL) {
                                                    server.tell([
                                                        Text.lightPurple('[ClearLag]'),
                                                        ' Removing all items on ground in 1 second!'
                                                    ]);
                                                    server.schedule(SECOND * 1, () => clearLag(server));
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
            callback.reschedule();
        }
    });
};

onEvent('server.load', (event) => {
    if (!runCL) return;
    event.server.schedule(SECOND * 5, () => {
        clearLagLoop(event.server);
    });
});
