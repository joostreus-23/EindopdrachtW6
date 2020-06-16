import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import PersonenFilter from "./MainOverzicht/Filters/PersonenFilter";
import GemiddeldeFilter from "./MainOverzicht/Filters/GemiddeldeFilter";
import Footer from "./Footer";
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
    const navBarLtoggle = () => {
      const sideNavL = document.getElementById("mysidenavL");
      sideNavL.classList.toggle("sidenavLOpen");
    };

    const locatieVeranderen = (naam) => {
      this.setState((pervstate) => {
        pervstate.locatie = "";
        return {
          locatie: naam,
        };
      });
      navBarLtoggle();
    };
    const toggleFilterLeuk = () => {
      this.setState((pervstate) => {
        const toggle = pervstate.filterLeuk ? false : true;
        return {
          filterLeuk: toggle,
        };
      });
    };
    const toggleFilterMoeilijk = () => {
      this.setState((pervstate) => {
        const toggle = pervstate.filterMoeilijk ? false : true;
        return {
          filterMoeilijk: toggle,
        };
      });
    };

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
          <Footer />
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
