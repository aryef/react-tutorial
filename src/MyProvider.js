import React, { Component } from 'react';

export const MContext = React.createContext();  //exporting context object

class MyProvider extends Component {
state = {message: ""}

//this indicates that the global store is accessible to all the child tags with MyProvider as Parent
render() {
        return (
            <MContext.Provider value={
            {   state: this.state,
                setMessage: (value) => 
                this.setState({message: value })}} >
            {this.props.children} 
             </MContext.Provider>)
    }
}

export default MyProvider