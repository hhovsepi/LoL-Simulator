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

let champion = getChampInfo("Shaco").then(champ => {
    console.log(champ);
    return champ;
});



