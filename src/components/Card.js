import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { InputGroup, FormControl, Col, Row } from "react-bootstrap";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import championData from "../championData";
import KEY from "../KEY";

export default function Card(props) {
  const [name, setName] = useState("Pain Gaming");
  const [icon, setIcon] = useState(`./images/profileicon/4945.png`);
  const [level, setLevel] = useState("300");
  const [pdl, setPdl] = useState("0");
  const [wins, setWins] = useState("0");
  const [losses, setLosses] = useState("0");
  const [winrate, setWinrate] = useState("0");
  const [rankedTier, setRankedTier] = useState(`./images/ranked/UNRANKED.png`);

  // Champion 1
  const [champion, setChampion] = useState(`./images/champion/draven.png`);
  const [championName, setChampionName] = useState("Draven");
  const [championPoints, setChampionPoints] = useState("99999");
  const [maestry, setMaestry] = useState(`./images/mastery/mastery-7.png`);

  // Champion 2
  const [champion2, setChampion2] = useState(`./images/champion/kaisa.png`);
  const [championName2, setChampionName2] = useState("Kai'sa");
  const [championPoints2, setChampionPoints2] = useState("10000");
  const [maestry2, setMaestry2] = useState(`./images/mastery/mastery-7.png`);

  // Champion 3
  const [champion3, setChampion3] = useState(`./images/champion/ezreal.png`);
  const [championName3, setChampionName3] = useState("Ezreal");
  const [championPoints3, setChampionPoints3] = useState("10000");
  const [maestry3, setMaestry3] = useState(`./images/mastery/mastery-7.png`);

  function getRankedData(accountID) {
    fetch(
      `https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/${accountID}?api_key=${KEY}`
    )
      .then((res) => res.json())
      .then((res) => {
        if (!res[0]) {
          const tier = "UNRANKED";
          const losses = 0;
          const wins = 0;
          const winrate = Math.round((wins / (wins + losses)) * 100);

          setRankedTier(`./images/ranked/UNRANKED.png`);

          console.log(tier);
        } else {
          const pdl = res[0].leaguePoints;
          const losses = res[0].losses;
          const wins = res[0].wins;
          const winrate = Math.round((wins / (wins + losses)) * 100);
          const tier = res[0].tier;
          setPdl(pdl);
          setLosses(losses);
          setWins(wins);
          setWinrate(winrate);
          setRankedTier(`./images/ranked/${tier}.png`);

          console.log(res, pdl, losses, wins, winrate, tier);
        }
      });
  }

  function getChampionName(championId) {
    for (let i = 0; i < championData.length; i++) {
      if (championData[i].id === championId) {
        return championData[i].name;
      }
    }
  }

  function getAllChampionInfo(res) {
    const championID = res.championId;
    const maestry = res.championLevel;
    const points = res.championPoints;
    const championName = getChampionName(championID);
    return [championID, maestry, points, championName];
  }

  function getChampionData(accountID) {
    fetch(
      `https://br1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${accountID}?api_key=${KEY}`
    )
      .then((res) => res.json())
      .then((res) => {
        setChampion(`./images/champion/${getAllChampionInfo(res[0])[3]}.png`);
        setChampionName(getChampionName(getAllChampionInfo(res[0])[0]));
        setChampionPoints(getAllChampionInfo(res[0])[2]);
        setMaestry(
          `./images/mastery/mastery-${getAllChampionInfo(res[0])[1]}.png`
        );

        setChampion2(`./images/champion/${getAllChampionInfo(res[1])[3]}.png`);
        setChampionName2(getChampionName(getAllChampionInfo(res[1])[0]));
        setChampionPoints2(getAllChampionInfo(res[1])[2]);
        setMaestry2(
          `./images/mastery/mastery-${getAllChampionInfo(res[1])[1]}.png`
        );

        setChampion3(`./images/champion/${getAllChampionInfo(res[2])[3]}.png`);
        setChampionName3(getChampionName(getAllChampionInfo(res[2])[0]));
        setChampionPoints3(getAllChampionInfo(res[2])[2]);
        setMaestry3(
          `./images/mastery/mastery-${getAllChampionInfo(res[2])[1]}.png`
        );
        console.log(
          getChampionName(res[0].championId),
          getChampionName(res[1].championId),
          getChampionName(res[2].championId)
        );
      });
  }
  function updateCard() {
    const name = document.getElementById("searchbar2").value;
    const url = `https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${KEY}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setName(res.name);
        setIcon(`./images/profileicon/${res.profileIconId}.png`);
        setLevel(res.summonerLevel);
        const accountID = res.id;
        getChampionData(accountID);
        getRankedData(accountID);
        document.getElementById("searchbar2").value = "";
      });
  }

  return (
    <>
      <Row className="justify-content-md-center searchbar">
        <Col md="auto">
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Username"
              id="searchbar2"
              aria-label="Username"
              aria-describedby="basic-addon2"
            />
            <Button
              onClick={updateCard}
              variant="outline-secondary"
              id="button-addon2"
            >
              Search
            </Button>
          </InputGroup>
        </Col>
      </Row>
      <div className="card">
        <h3>{name}</h3>
        <h4>Level {level}</h4>
        <Tippy
          placement="right"
          content={
            <div className="card--ranked tippy">
              <p>PDL: {pdl}</p> <p>Winrate: {winrate}%</p>
              <img className="card--tier" src={rankedTier}></img>
            </div>
          }
        >
          <img className="card--icon" src={icon}></img>
        </Tippy>
        <h5>Favorite Champions</h5>
        <div className="card--champions">
          <Tippy
            placement="left"
            content={
              <div className="tippy">
                <h5 className="tooltip--name">{championName2}</h5>
                <img src={maestry2}></img>
                <h5>{championPoints2} Maestry Points</h5>
              </div>
            }
          >
            <img className="card--champion" src={champion2}></img>
          </Tippy>
          <Tippy
            content={
              <div className="tippy">
                <h5 className="tooltip--name">{championName}</h5>
                <img src={maestry}></img>
                <h5>{championPoints} Maestry Points</h5>
              </div>
            }
          >
            <img className="card--champion" src={champion}></img>
          </Tippy>
          <Tippy
            placement="right"
            content={
              <div className="tippy">
                <h5 className="tooltip--name">{championName3}</h5>
                <img src={maestry3}></img>
                <h5>{championPoints3} Maestry Points</h5>
              </div>
            }
          >
            <img className="card--champion" src={champion3}></img>
          </Tippy>
        </div>
      </div>
    </>
  );
}
