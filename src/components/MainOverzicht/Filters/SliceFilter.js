import React from "react";
import Content from "../Content";

function SliceFilter(props) {
  return (
    <Content
      data={props.data}
      filterLeuk={props.filterLeuk}
      filterMoeilijk={props.filterMoeilijk}
    />
  );
}

export default SliceFilter;
