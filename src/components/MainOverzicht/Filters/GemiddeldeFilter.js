import React from "react";
import SliceFilter from "./SliceFilter";

function GemiddeldeFilter(props) {
  const filterdata = (person) => {
    const persoondata = props.data.filter(
      (opdracht) => opdracht.persoon === "Evelyn"
    );
    return persoondata;
  };

  const perOpdrachtenFilter = () => {
    let perOpdracht = [];
    const alleopdrachten = filterdata("Evelyn").map(
      (opdracht) => opdracht.opdracht
    );
    for (let i = 0; i < alleopdrachten.length; i++) {
      const opdracht = props.data.filter((opdracht) => {
        return opdracht.opdracht === alleopdrachten[i];
      });
      perOpdracht.push(opdracht);
    }
    return perOpdracht;
  };
  let opdrachten = perOpdrachtenFilter();

  const gemiddeldePerOpdrachtFilter = (i) => {
    let gemiddeldePerOpdracht = [];
    let naamOpdracht = [];
    let moeilijkCijfers = [];
    let leukCijfers = [];
    opdrachten[i].forEach((opdracht) => {
      moeilijkCijfers.push(opdracht.moeilijk);
      leukCijfers.push(opdracht.leuk);
      naamOpdracht.push(opdracht.opdracht);
    });
    const opodrachtNaam = naamOpdracht.slice(0, 1);
    const gemiddeldmoeilijk =
      moeilijkCijfers.reduce((a, c) => {
        return a + c;
      }, 0) / opdrachten[i].length;
    const gemiddeldleuk =
      leukCijfers.reduce((a, c) => {
        return a + c;
      }, 0) / opdrachten[i].length;
    gemiddeldePerOpdracht.push({
      opdracht: opodrachtNaam.toString(),
      moeilijk: gemiddeldmoeilijk,
      leuk: gemiddeldleuk,
    });
    return gemiddeldePerOpdracht;
  };

  const showGemiddeldeData = () => {
    let arrayData = [];
    for (let i = 0; i < opdrachten.length; i++) {
      arrayData.push(gemiddeldePerOpdrachtFilter(i));
    }
    let showData = [].concat.apply([], arrayData);
    return showData;
  };

  return (
    <SliceFilter
      data={showGemiddeldeData()}
      locatie={props.locatie}
      filterLeuk={props.filterLeuk}
      filterMoeilijk={props.filterMoeilijk}
    />
  );
}

export default GemiddeldeFilter;
