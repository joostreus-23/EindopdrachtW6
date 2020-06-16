import React from "react";
import Content from "../Content";
import SliceFilter from "./SliceFilter";

function PersonenFilter(props) {
  const alleopdrachten = props.data.map((opdracht) => opdracht.opdracht);

  let person = props.locatie;
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
