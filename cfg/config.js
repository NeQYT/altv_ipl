/**
 * ! Special thanks for:
 * * https://github.com/Bob74/bob74_ipl
 * * https://wiki.altv.mp/World:Online_Interiors_and_Locations
*/

const config = {
    /**
     * ! Gunrunning DLC
     * 
     * ? Contains:
     * 
     * * Bunkers
     * * Yacht
    */


    bunkers: {
        // * Bunkers
        interiorid: 258561, 
        
        locations: [
            {name: 'gr_case0_bunkerclosed', enabled: true}, // * Desert Bunker
            {name: 'gr_case1_bunkerclosed', enabled: false}, // * Smoke tree
            {name: 'gr_case2_bunkerclosed', enabled: false}, // * Scrapyard Bunker
            {name: 'gr_case3_bunkerclosed', enabled: false}, // * Oilfields Bunker
            {name: 'gr_case4_bunkerclosed', enabled: false}, // * Raton Canyon Bunker
            {name: 'gr_case5_bunkerclosed', enabled: false}, // * Grapeseed Bunker
            {name: 'gr_case6_bunkerclosed', enabled: false}, // * Farmhouse Bunker
            {name: 'gr_case7_bunkerclosed', enabled: false}, // * Palleto Bunker
            {name: 'gr_case9_bunkerclosed', enabled: false}, // * Route 68 Bunker
            {name: 'gr_case10_bunkerclosed', enabled: false}, // * Zancudo Bunker
            {name: 'gr_case11_bunkerclosed', enabled: false}, // * Route 1 Bunker
        ],

        style: [
            {name: 'Bunker_Style_A', enabled: false}, // * Default
            {name: 'Bunker_Style_B', enabled: false}, // * Blue
            {name: 'Bunker_Style_C', enabled: true}, // * Yellow
        ],

        security: [
            {name: "standard_security_set", enabled: false}, // * Standard security
            {name: "security_upgrade", enabled: true}, // * Upgraded security
        ],

        upgrade: [ 
            {name: "standard_bunker_set", enabled: false}, // * Standard set
            {name: "upgrade_bunker_set", enabled: true}, // * Upgraded set
        ],

        props: [
            {name: "gun_locker_upgrade", enabled: true}, // * Locker next to the office
            {name: "gun_range_lights", enabled: true}, // * Shooting range lights
            {name: "Office_blocker_set", enabled: true}, // * Lock office by metal door.
            {name: "Office_Upgrade_set", enabled: true}, // * Office 
            {name: "gun_wall_blocker", enabled: false}, // * Lock shooting range by walls.
            {name: "gun_range_blocker_set", enabled: false}, // * Lock shooting range by metal door.
            {name: "Gun_schematic_set", enabled: true}, // * Gun schemats
        ]
    },

    yacht: {
        // * Yacht 
        locations: [
            // * Gunrunning Heist Yacht
            {name: "gr_heist_yacht2", enabled: true},
            {name: "gr_heist_yacht2_bar", enabled: true},
            {name: "gr_heist_yacht2_bedrm", enabled: true},
            {name: "gr_heist_yacht2_bridge", enabled: true},
            {name: "gr_heist_yacht2_enginrm", enabled: true},
            {name: "gr_heist_yacht2_lounge", enabled: true},
        ]   
    },

    /**
     * ! Heist DLC
     * 
     * ? Contains:
     * 
     * * Yacht
     * TODO: Carrier
    */

    yacht2: {
        locations: [
            // * Dignity Heist Yacht and Dignity Party Yacht
            {name: "smboat", enabled: true},
            {name: "smboat_lod", enabled: true},
            {name: "hei_yacht_heist", enabled: true},
            {name: "hei_yacht_heist_lod", enabled: true},
            {name: "hei_yacht_heist_enginrm", enabled: true},
            {name: "hei_yacht_heist_enginrm_lod", enabled: true},
            {name: "hei_yacht_heist_Lounge", enabled: true},
            {name: "hei_yacht_heist_Lounge_lod", enabled: true},
            {name: "hei_yacht_heist_Bridge", enabled: true},
            {name: "hei_yacht_heist_Bridge_lod", enabled: true},
            {name: "hei_yacht_heist_Bar", enabled: true},
            {name: "hei_yacht_heist_Bar_lod", enabled: true},
            {name: "hei_yacht_heist_Bedrm", enabled: true},
            {name: "hei_yacht_heist_Bedrm_lod", enabled: true},
            {name: "hei_yacht_heist_DistantLights", enabled: true},    
            {name: "hei_yacht_heist_LODLights", enabled: true},
        ]
    }
}

export default config;