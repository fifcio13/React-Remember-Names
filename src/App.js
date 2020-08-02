import React, { Component } from 'react';
import People from './People.js';
import AddPeople from  './AddPeople.js';

class App extends Component {
  state = {
    people: [{ name: null, count: null, id: null }],
  };

  addHuman = (human) => {
    human.id = Math.random();

    console.log(human.count);

    const exists = this.state.people.find(p => p.name === human.name);
    if (exists) {
      human.count = human.count - 1;
      console.log('Duplicate');
    }
    let people = [...this.state.people, human];

    this.setState({
      people: people,
    });
  };


  render() {
    return (
      <div className="App">
        <div className="App-inner">
          <aside>
            <p>
              According to Mona Chalabi's research -&nbsp;an&nbsp;average person
              can remember up to 150 people.
          </p>
            <a
              title="FiveThirtyEight site"
              href="https://fivethirtyeight.com/features/how-many-people-can-you-remember/"
            >
              How many people can you remember? - article
          </a>
          </aside>
          <header>
            <h1>
              How many names and surnames <span>can YOU remember?</span>
            </h1>
          </header>
          <AddPeople addHuman={this.addHuman} />
          <People people={this.state.people} />
          {/* <div>Countdown: {counter}</div> */}
        </div>
        <footer>
          <p>
            We do NOT store any of the written data. Made by&nbsp;
            <a href="https://fifcio13.github.io/">Filip&nbsp;Krawczyk</a> © 2020
            using React
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
