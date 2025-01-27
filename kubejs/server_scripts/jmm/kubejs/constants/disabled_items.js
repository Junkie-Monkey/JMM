//priority: 1001
const disabledItems = [
    'abnormals_delight:adzuki_cake_slice',
    'abnormals_delight:banana_cake_slice',
    'abnormals_delight:cherry_pantry',
    'abnormals_delight:chocolate_cake_slice',
    'abnormals_delight:cooked_duck_fillet',
    'abnormals_delight:cooked_venison_shanks',
    'abnormals_delight:duck_fillet',
    'abnormals_delight:mint_cake_slice',
    'abnormals_delight:necromium_knife',
    'abnormals_delight:passionfruit_glazed_duck',
    'abnormals_delight:seared_venison',
    'abnormals_delight:silver_knife',
    'abnormals_delight:strawberry_cake_slice',
    'abnormals_delight:vanilla_cake_slice',
    'abnormals_delight:venison_shanks',
    'abnormals_delight:willow_pantry',
    'abnormals_delight:wisteria_pantry',

    'aquaculture:wooden_fillet_knife',
    'aquaculture:stone_fillet_knife',
    'aquaculture:iron_fillet_knife',
    'aquaculture:gold_fillet_knife',
    'aquaculture:diamond_fillet_knife',
    'aquaculture:frog_legs_raw',
    'aquaculture:frog_legs_cooked',

    'betterendforge:ender_dust',

    'blockcarpentry:frame_chest',
    'blockcarpentry:illusion_chest',

    'bloodmagic:sand_netherite',
    'bloodmagic:gravel_netherite_scrap',
    'bloodmagic:fragment_netherite_scrap',

    'byg:ametrine_block',
    'byg:ametrine_boots',
    'byg:ametrine_chestplate',
    'byg:ametrine_gems',
    'byg:ametrine_helmet',
    'byg:ametrine_horse_armor',
    'byg:ametrine_leggings',
    'byg:ametrine_ore',
    'byg:pendorite_axe',
    'byg:pendorite_battleaxe',
    'byg:pendorite_block',
    'byg:pendorite_hoe',
    'byg:pendorite_horse_armor',
    'byg:pendorite_ore',
    'byg:pendorite_pickaxe',
    'byg:pendorite_scraps',
    'byg:pendorite_shovel',
    'byg:pendorite_sword',
    'byg:emeraldite_ore',
    'byg:emeraldite_shards',

    'create:dough',

    'decorative_blocks_abnormals:ender_brazier',

    'integrateddynamics:part_entity_writer',

    'ironjetpacks:strap',
    'ironjetpacks:basic_coil',
    'ironjetpacks:advanced_coil',
    'ironjetpacks:elite_coil',
    'ironjetpacks:ultimate_coil',
    'ironjetpacks:hardened_cell',
    'ironjetpacks:hardened_capacitor',
    'ironjetpacks:invar_cell',
    'ironjetpacks:invar_capacitor',
    'ironjetpacks:blazing_cell',
    'ironjetpacks:blazing_capacitor',
    'ironjetpacks:signalum_cell',
    'ironjetpacks:signalum_capacitor',
    'ironjetpacks:niotic_cell',
    'ironjetpacks:niotic_capacitor',
    'ironjetpacks:lumium_cell',
    'ironjetpacks:lumium_capacitor',
    'ironjetpacks:spirited_cell',
    'ironjetpacks:spirited_capacitor',
    'ironjetpacks:enderium_cell',
    'ironjetpacks:enderium_capacitor',
    'ironjetpacks:nitro_cell',
    'ironjetpacks:nitro_capacitor',

    'losttrinkets:magical_herbs',
    'losttrinkets:octopick',
    'losttrinkets:tea_leaf',
    'losttrinkets:book_o_enchanting',
    'losttrinkets:blaze_heart',
    'losttrinkets:turtle_shell',
    'losttrinkets:tha_cloud',
    'losttrinkets:rock_candy',
    'losttrinkets:mad_aura',

    /materialis:psimetal/,

    'mekanism:sawdust',
    'mekanism:dust_lapis_lazuli',
    'mekanism:dust_lithium',

    'mythicbotany:raindeletia',
    'mythicbotany:raindeletia_floating',
    'mythicbotany:wither_aconite',
    'mythicbotany:wither_aconite_floating',

    'pedestals:dustflour',

    'pitg:green_dye',

    'pneumaticcraft:wheat_flour',

    'projectvibrantjourneys:clam',
    'projectvibrantjourneys:clam_chowder',
    'projectvibrantjourneys:cooked_clam',

    'quark:pipe',
    'quark:potato_crate',
    'quark:beetroot_crate',
    'quark:carrot_crate',

    'thermal:beetroot_block',
    'thermal:carrot_block',
    'thermal:potato_block',
    'thermal:sugar_cane_block',
    'thermal:apple_block',

    'simplefarming:raw_bacon',
    'simplefarming:cooked_bacon',
    'simplefarming:cooked_egg',
    'simplefarming:noodles',
    'simplefarming:chocolate',

    'storagedrawers:conversion_upgrade'
];

let uselessOreSightPotions = [
    'allthemodium',
    'bismuth',
    'crimsoniron',
    'platinum',
    'unobtainium',
    'vibranium',
    'netherite'
];
uselessOreSightPotions.forEach((uselessPotion) => {
    disabledItems.push(
        `potionsmaster:${uselessPotion}_powder`,
        `potionsmaster:calcinated${uselessPotion}_powder`,
        Item.of('minecraft:potion', `{Potion:"potionsmaster:${uselessPotion}_sight"}`),
        Item.of('minecraft:splash_potion', `{Potion:"potionsmaster:${uselessPotion}_sight"}`),
        Item.of('minecraft:tipped_arrow', `{Potion:"potionsmaster:${uselessPotion}_sight"}`),
        Item.of('minecraft:lingering_potion', `{Potion:"potionsmaster:${uselessPotion}_sight"}`),
        Item.of('apotheosis:potion_charm', `{Damage:0,Potion:"potionsmaster:${uselessPotion}_sight"}`),
        Item.of('immersiveengineering:potion_bucket', `{Potion:"potionsmaster:${uselessPotion}_sight"}`),
        Item.of('supplementaries:bamboo_spikes_tipped', `{Damage:0,Potion:"potionsmaster:${uselessPotion}_sight"}`)
    );
});
