import React, { Component } from 'react';
import Table from './Table'

export class App extends Component {
    render() { 
        
        const characters =  [
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

        return (
            <div className="container">
              <Table characterData1={characters} />
            </div>
          )
    }
}
