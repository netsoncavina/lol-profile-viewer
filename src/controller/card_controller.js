import KEY from "../KEY";
import championData from "../championData";

export function test() {
  console.log("working");
}

export default function formatNumber(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// export function getRankedData(accountID) {
//   fetch(
//     `https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/${accountID}?api_key=${KEY}`
//   )
//     .then((res) => res.json())
//     .then((res) => {
//       if (!res[0]) {
//         const tier = "UNRANKED";
//         const losses = 0;
//         const wins = 0;
//         const pdl = 0;
//         const winrate = 0;
//         const rankedTier = `./images/ranked/UNRANKED.png`;
//         return [pdl, losses, wins, winrate, tier, rankedTier];
//       } else {
//         const pdl = res[0].leaguePoints;
//         const losses = res[0].losses;
//         const wins = res[0].wins;
//         const winrate = Math.round((wins / (wins + losses)) * 100);
//         const tier = res[0].tier;
//         const rankedTier = `./images/ranked/${tier}.png`;
//         return [pdl, losses, wins, winrate, tier, rankedTier];
//       }
//     });
// }

// export function getChampionName(championId) {
//   for (let i = 0; i < championData.length; i++) {
//     if (championData[i].id === championId) {
//       return championData[i].name;
//     }
//   }
// }

// export function getAllChampionInfo(res) {
//   const championID = res.championId;
//   const maestry = res.championLevel;
//   const points = res.championPoints;
//   const championName = getChampionName(championID);
//   return [championID, maestry, points, championName];
// }

// export function getChampionData(accountID) {
//   fetch(
//     `https://br1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${accountID}?api_key=${KEY}`
//   )
//     .then((res) => res.json())
//     .then((res) => {
//       const champion = `./images/champion/${getAllChampionInfo(res[0])[3]}.png`;
//       const championName = getChampionName(getAllChampionInfo(res[0])[0]);
//       const championPoints = getAllChampionInfo(res[0])[2];
//       const maestry = `./images/mastery/mastery-${
//         getAllChampionInfo(res[0])[1]
//       }.png`;
//       const background = `url("./images/centered/${getChampionName(
//         getAllChampionInfo(res[0])[0]
//       )}_0.jpg")`;

//       const champion2 = `./images/champion/${
//         getAllChampionInfo(res[1])[3]
//       }.png`;
//       const championName2 = getChampionName(getAllChampionInfo(res[1])[0]);
//       const championPoints2 = getAllChampionInfo(res[1])[2];
//       const maestry2 = `./images/mastery/mastery-${
//         getAllChampionInfo(res[1])[1]
//       }.png`;

//       const champion3 = `./images/champion/${
//         getAllChampionInfo(res[2])[3]
//       }.png`;
//       const championName3 = getChampionName(getAllChampionInfo(res[2])[0]);
//       const championPoints3 = getAllChampionInfo(res[2])[2];
//       const maestry3 = `./images/mastery/mastery-${
//         getAllChampionInfo(res[2])[1]
//       }.png`;
//       return [
//         champion,
//         championName,
//         championPoints,
//         maestry,
//         background,
//         champion2,
//         championName2,
//         championPoints2,
//         maestry2,
//         champion3,
//         championName3,
//         championPoints3,
//         maestry3,
//       ];
//     });
// }

// export function updateCard() {
//   const searchName = document.getElementById("searchbar2").value;
//   const url = `https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${searchName}?api_key=${KEY}`;
//   fetch(url)
//     .then((res) => res.json())
//     .then((res) => {
//       const name = res.name;
//       const icon = `./images/profileicon/${res.profileIconId}.png`;
//       const level = res.summonerLevel;
//       const accountID = res.id;
//       getChampionData(accountID);
//       getRankedData(accountID);
//       document.getElementById("searchbar2").value = "";
//     });
//   return [name, icon, level, accountID];
// }

// function update() {
//   // Account
//   let vetor = updateCard();
//   console.log(vetor);
//   setName(vetor[0]);
//   setIcon(vetor[1]);
//   setLevel(vetor[2]);
//   const accountID = vetor[3];
//   // Champions
//   setChampion(getChampionData(accountID)[0]);
//   setChampionName(getChampionData(accountID)[1]);
//   setChampionPoints(getChampionData(accountID)[2]);
//   setMaestry(getChampionData(accountID)[3]);
//   setBackground(getChampionData(accountID)[4]);
//   setChampion2(getChampionData(accountID)[5]);
//   setChampionName2(getChampionData(accountID)[6]);
//   setChampionPoints2(getChampionData(accountID)[7]);
//   setMaestry2(getChampionData(accountID)[8]);
//   setChampion3(getChampionData(accountID)[9]);
//   setChampionName3(getChampionData(accountID)[10]);
//   setChampionPoints3(getChampionData(accountID)[11]);
//   setMaestry3(getChampionData(accountID)[12]);
//   // Ranked
//   setPdl(getRankedData(accountID)[0]);
//   setLosses(getRankedData(accountID)[1]);
//   setWins(getRankedData(accountID)[2]);
//   setWinrate(getRankedData(accountID)[3]);
//   setRankedTier(getRankedData(accountID)[5]);
// }
