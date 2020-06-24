import React from "react";
import Content from "../Content";
import SliceFilter from "./SliceFilter";

function PersonenFilter(props) {
  let person = props.locatie;

  // functie die de database filterd met de persoon uit de state
  const filterdata = (person) => {
    const persoondata = props.data.filter(
      (opdracht) => opdracht.persoon === person
    );
    return persoondata;
  };

  return (
    <SliceFilter
      data={filterdata(person)}
      filterLeuk={props.filterLeuk}
      filterMoeilijk={props.filterMoeilijk}
    />
  );
}

export default PersonenFilter;
