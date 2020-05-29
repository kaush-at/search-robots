import React from "react";
import "./App.css";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });

    // const filteredRobots = this.state.robots.filter((robot) => {
    //   return robot.name
    //     .toLowerCase()
    //     .includes(this.state.searchField.toLowerCase());
    // });
    // we move the ffilterrobots functions in to render method then we can have access to filtered robots
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        this.setState({ robots: users });
      });
  }

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });

    if (this.state.robots.length === 0) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div className="tc">
          <h1>Robofriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />;
            </ErrorBoundary>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
