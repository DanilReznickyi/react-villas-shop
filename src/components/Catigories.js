import React, { Component } from 'react'
export class Catigories extends Component {
    constructor(props){
        super(props)
        this.state = {
            categories: [
                {
                    key: 'All',
                    name: 'All'
                },
                {
                    key: 'Turkish',
                    name: 'Turkish'
                },
                {
                    key: 'Indonesian',
                    name: 'Indonesian'
                },
                {
                    key: 'Spanish',
                    name: 'Spanish'
                },
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div onClick={() => this.props.chooseCategory(el.key)} key={el.key}>{el.name}</div>
        ))}
      </div>
    )
  }
}
export default Catigories