import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { InputGroup, FormControl, Col, Row } from "react-bootstrap";
import championData from "../championData";

export default function Card(props) {
  const [name, setName] = useState(props.name);
  const [icon, setIcon] = useState(`./images/profileicon/${props.icon}.png`);
  const [level, setLevel] = useState(props.level);
  const [champion, setChampion] = useState(
    `./images/champion/${props.champion}.png`
  );
  const [championName, setChampionName] = useState(props.champion);
  const [championPoints, setChampionPoints] = useState(props.championPoints);

  function getChampionName(championId) {
    for (let i = 0; i < championData.length; i++) {
      if (championData[i].id === championId) {
        return championData[i].name;
      }
    }
  }
  function getChampionData(accountID) {
    fetch(
      `https://br1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${accountID}?api_key=RGAPI-2f444ac5-b68c-494b-991e-237369c8b97f`
    )
      .then((res) => res.json())
      .then((res) => {
        const championID = res[0].championId;
        const maestry = res[0].championLevel;
        const points = res[0].championPoints;
        const championName = getChampionName(championID);
        setChampion(`./images/champion/${championName}.png`);
        setChampionName(getChampionName(championID));
        setChampionPoints(points);
        console.log(championName);
      });
  }
  function updateCard() {
    const name = document.getElementById("searchbar2").value;
    const url = `https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=RGAPI-2f444ac5-b68c-494b-991e-237369c8b97f`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setName(res.name);
        setIcon(`./images/profileicon/${res.profileIconId}.png`);
        setLevel(res.summonerLevel);
        const accountID = res.id;
        getChampionData(accountID);
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
        <img className="card--icon" src={icon}></img>
        <h5>Most Played champion</h5>
        <h5>{championName}</h5>
        <img className="card--champion" src={champion}></img>
        <h5>{championPoints} Maestry Points</h5>
      </div>
    </>
  );
}
