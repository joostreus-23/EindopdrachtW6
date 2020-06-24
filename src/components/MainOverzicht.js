import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import PersonenFilter from "./MainOverzicht/Filters/PersonenFilter";
import GemiddeldeFilter from "./MainOverzicht/Filters/GemiddeldeFilter";
import Legenda from "./Legenda";
import Data from "./Data";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class MainOverzicht extends React.Component {
  constructor() {
    super();
    this.state = {
      data: Data,
      locatie: "Home",
      filterLeuk: true,
      filterMoeilijk: true,
    };
  }

  render() {
    // toggle van de linker navbar
    const navBarLtoggle = () => {
      const sideNavL = document.getElementById("mysidenavL");
      sideNavL.classList.toggle("sidenavLOpen");
    };

    // de locatie state veranderen
    const locatieVeranderen = (naam) => {
      this.setState((pervstate) => {
        pervstate.locatie = "";
        return {
          locatie: naam,
        };
      });
      navBarLtoggle();
    };
    // toggle van de state leuk filter
    const toggleFilterLeuk = () => {
      this.setState((pervstate) => {
        const toggle = pervstate.filterLeuk ? false : true;
        return {
          filterLeuk: toggle,
        };
      });
    };

    // toggle van de state moeilijk filter
    const toggleFilterMoeilijk = () => {
      this.setState((pervstate) => {
        const toggle = pervstate.filterMoeilijk ? false : true;
        return {
          filterMoeilijk: toggle,
        };
      });
    };

    //functie om alleen de namen uit de database te halen
    const namenFilter = () => {
      let namen = [];
      this.state.data.forEach((opdracht) => {
        if (!namen.includes(opdracht.persoon)) {
          namen.push(opdracht.persoon);
        }
      });
      return namen;
    };

    let namen = namenFilter();

    //functie wat naar de gemiddeldefilter gestuurd moet worden
    const gemiddeldeFilter = () => {
      return (
        <GemiddeldeFilter
          data={this.state.data}
          locatie={this.state.locatie}
          filterLeuk={this.state.filterLeuk}
          filterMoeilijk={this.state.filterMoeilijk}
        />
      );
    };

    //functie wat naar de personenfilter gestuurd moet worden
    const personenFilter = () => {
      return (
        <PersonenFilter
          data={this.state.data}
          locatie={this.state.locatie}
          filterLeuk={this.state.filterLeuk}
          filterMoeilijk={this.state.filterMoeilijk}
        />
      );
    };

    return (
      <div className="main">
        <Router>
          <Header />
          <NavBar
            locatieVeranderen={locatieVeranderen}
            locatie={this.state.locatie}
            filterLeuk={this.state.filterLeuk}
            filterMoeilijk={this.state.filterMoeilijk}
            toggleFilterLeuk={toggleFilterLeuk}
            toggleFilterMoeilijk={toggleFilterMoeilijk}
            namen={namen}
            navBarLtoggle={navBarLtoggle}
          />
          <Legenda />
          <Switch>
            <Route path="/" exact component={gemiddeldeFilter} />
            <Route path="/student/:id" component={personenFilter} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default MainOverzicht;
