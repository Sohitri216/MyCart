import React, { Component } from 'react';
import logo from '../logo.svg';
import PropTypes from 'prop-types';

class ItemList extends Component {
    render() {
        console.log(this.props.items);
        return this.props.items.map((item) => (
            <div className="item-short-desc" key={item.id}>
                <img className="item-list-dimension" src={item.img || logo} alt="item description"></img>
                <label>{item.description}</label>
                <div>Price: Rs {item.price}</div>
                <button className="details-button">View</button>
            </div>
        ))
    }
}

ItemList.propTypes= {
    items: PropTypes.array.isRequired
}

export default ItemList;