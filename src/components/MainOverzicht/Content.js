import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryLabel,
  VictoryScatter,
  VictoryGroup,
} from "victory";

class Content extends React.Component {
  render(props) {
    const sliceFilter = () => {
      if (this.props.filterMoeilijk && this.props.filterLeuk) {
        return (
          <div className="content">
            <VictoryChart width={1100} height={600} domainPadding={5}>
              <VictoryGroup
                offset={5}
                animate={{
                  duration: 500,
                  onLoad: { duration: 500 },
                }}
                style={{ data: { width: 5 } }}
                colorScale={["red", "gold"]}
              >
                <VictoryBar data={this.props.data} x="opdracht" y="moeilijk" />
                <VictoryBar data={this.props.data} x="opdracht" y="leuk" />
              </VictoryGroup>

              <VictoryAxis
                style={{ tickLabels: { angle: -90 } }}
                tickFormat={this.props.data.map((avg) => avg.opdracht)}
              />
              <VictoryAxis dependentAxis tickValues={[1, 2, 3, 4, 5]} />
            </VictoryChart>
          </div>
        );
      } else if (this.props.filterLeuk) {
        return (
          <div className="content">
            <VictoryChart
              width={1100}
              height={600}
              domainPadding={5}
              offsetX={225}
            >
              <VictoryGroup
                offset={5}
                animate={{
                  duration: 500,
                  onLoad: { duration: 500 },
                }}
                style={{ data: { width: 5 } }}
                colorScale={["gold"]}
              >
                <VictoryBar data={this.props.data} x="opdracht" y="leuk" />
              </VictoryGroup>

              <VictoryAxis style={{ tickLabels: { angle: -90 } }} />
              <VictoryAxis dependentAxis tickValues={[1, 2, 3, 4, 5]} />
            </VictoryChart>
          </div>
        );
      } else if (this.props.filterMoeilijk) {
        return (
          <div className="content">
            <VictoryChart
              width={1100}
              height={600}
              domainPadding={5}
              offsetX={225}
            >
              <VictoryGroup
                offset={5}
                animate={{
                  duration: 500,
                  onLoad: { duration: 500 },
                }}
                style={{ data: { width: 5 } }}
                colorScale={["red"]}
              >
                <VictoryBar data={this.props.data} x="opdracht" y="moeilijk" />
              </VictoryGroup>

              <VictoryAxis style={{ tickLabels: { angle: -90 } }} />
              <VictoryAxis dependentAxis tickValues={[1, 2, 3, 4, 5]} />
            </VictoryChart>
          </div>
        );
      } else {
        return (
          <div className="content">
            <VictoryChart
              width={1100}
              height={600}
              domainPadding={5}
              offsetX={225}
            >
              <VictoryGroup
                offset={5}
                animate={{
                  duration: 500,
                  onLoad: { duration: 500 },
                }}
                style={{ data: { width: 5 } }}
                colorScale={["red", "gold"]}
              >
                <VictoryBar data={this.props.data} x="opdracht" />
              </VictoryGroup>

              <VictoryAxis style={{ tickLabels: { angle: -90 } }} />
              <VictoryAxis dependentAxis />
            </VictoryChart>
          </div>
        );
      }
    };

    return <div>{sliceFilter()}</div>;
  }
}

export default Content;
