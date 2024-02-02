import React, { Component } from 'react'
import { FaArrowRight } from "react-icons/fa";
export class ShowFullItem extends Component {
  render() {
    return (
      <div className='full-item'>
        <div>
            <img src={'./img/' + this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)}/>
            <FaArrowRight  className='close-card' onClick={() => this.props.onShowItem(this.props.item)}/>
            <h2>{this.props.item.title}</h2>
            <h4>{this.props.item.category}</h4>
            <p>{this.props.item.desc}</p>
            <b>{this.props.item.price} €</b>
            <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>+</div>
            <iframe className='map' src={this.props.item.map} title="Google Map"></iframe>
        </div>
      </div>
    )
  }
}
export default ShowFullItem