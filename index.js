// let's simulate league of legends!
// v2: have the script create a story about a champion based on their lore
let Airtable = require('airtable');
const airtableApiKey = require('./passkeys').airtableApiKey;
const airtableBaseId = require('./passkeys').airtableBaseId;
var base = new Airtable({ apiKey: airtableApiKey }).base(airtableBaseId);

async function getChampInfo(champName) {
    try {
        if (champName === "" || champName === undefined) {
            // if no champName is provided, let's pick a random champ!
            const response = await fetch(`http://ddragon.leagueoflegends.com/cdn/12.8.1/data/en_US/champion.json`);
            const data = await response.json();
            return new Promise((resolve, reject) => {
                const champ = data.data;
                resolve(champ);
            });
        } else {
            const response = await fetch(`http://ddragon.leagueoflegends.com/cdn/12.8.1/data/en_US/champion/${champName}.json`);
            const data = await response.json();
            return new Promise((resolve, reject) => {
                const champ = data.data;
                resolve(champ);
            });
        }
    } catch (error) {
        console.log(error);
    }
};

let champion = getChampInfo("").then(champ => {
    console.log(champ);
    return champ;
});


        // // cache each champion object into airtable
        // let champName = champ[i].name;
        // console.log(champName);
        // let champTitle = champ[i].title;
        // let champLore = champ[i].lore;
        // let champTags = champ[i].tags;
        // let champKey = champ[i].key;
        // let champBlurb = champ[i].blurb;
        // let champPartype = champ[i].partype;
        // let champInfo = champ[i].info;
        // let champStats = champ[i].stats;
        // let champPassive = champ[i].passive;
        // let champSpells = champ[i].spells;
        // let champAllyTips = champ[i].allytips;
        // let champEnemyTips = champ[i].enemytips;

        // base('Champion DB').create([
        //     {
        //         "fields": {
        //             "champion": champName,
        //             "lore": champLore,
        //             "key": champKey,
        //             "title": champTitle,
        //             "blurb": champBlurb,
        //             "allyTips": champAllyTips,
        //             "enemyTips": champEnemyTips,
        //             "tags": champTags,
        //             "partype": champPartype,
        //             "info": champInfo,
        //             "stats": champStats,
        //             "spells": champSpells,
        //             "passive": champPassive,
        //         }
        //     },
        // ], function (err, records) {
        //     if (err) {
        //         console.error(err);
        //         return;
        //     }
        //     records.forEach(function (record) {
        //         console.log(record.getId());
        //     });
        // });



