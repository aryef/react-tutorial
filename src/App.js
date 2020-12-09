import React, { Component } from 'react';
import Table from './Table'
import Form from './Form'
import MyProvider from './MyProvider'

export class App extends Component {    
        state = {
        message:" initial message",
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

        callbackFunction = (childData) => {
            this.setState({message: childData})
        }

        removeCharacter = (index) => {
            const characters = this.state.characters
          
            this.setState({
              characters: characters.filter((character, i) => {
                return i !== index
              }),
            })
          }
        handleSubmit = (character) => {
            this.setState({characters: [...this.state.characters, character]})
          }
        render() {
            const  characters  = this.state.characters
            const message = this.state.message
          
            return (
              <div className="container">
              <MyProvider>
              <h1>{message}</h1>
                <Table characterData11={characters} 
                        removeCharacter={this.removeCharacter}                       
                         />
                <Form handleSubmit={this.handleSubmit}
                     parentCallback = {this.callbackFunction}
                />
                </MyProvider>
              </div>
            )
          }
    }

