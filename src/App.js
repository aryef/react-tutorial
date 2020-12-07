import React, { Component } from 'react';
import Table from './Table'

export class App extends Component {    
        state = {
         characters :  [
            {
              name: 'Charlie2',
              job: 'Janitor8',
            },
            {
              name: 'Mac',
              job: 'Bouncer',
            },
            {
              name: 'Dee',
              job: 'Aspring actress',
            },
            {
              name: 'Dennis2',
              job: 'Bartender',
            },
          ]
        };

        removeCharacter = (index) => {
            const {characters} = this.state
          
            this.setState({
              characters: characters.filter((character, i) => {
                return i !== index
              }),
            })
          }

        render() {
            const { characters } = this.state
          
            return (
              <div className="container">
                <Table characterData11={characters} removeCharacter={this.removeCharacter} />
              </div>
            )
          }
    }

