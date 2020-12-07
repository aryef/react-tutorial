import React, {Component} from 'react'

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  )
}

const TableBody = (props1) => {
    const rows = props1.characterData2.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.job}</td>
        </tr>
      )
    })
  
    return <tbody>{rows}</tbody>
  }

  class TableBody1 extends Component {
      render() {
        const rows = this.props.characterData2.map((row, index) => {
            return (
              <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
              </tr>
            )     
          }            
         )   
         return (
            <tbody>{rows}</tbody> 
            )    
  }
}

class Table extends Component {
  render() {
    //const {characterData1} = this.props
    const characterData11 = this.props.characterData1
    return (
        <table>
        <TableHeader />
        <TableBody1 characterData2 ={characterData11} />
      </table>
    )
  }
}

export default Table