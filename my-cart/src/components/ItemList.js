import React, { Component } from 'react';
import { browserHistory } from 'react-router-dom';
import logo from '../logo.svg';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class ItemList extends Component {

    componentDidMount() {
        // console.log(this.props)
    }
    viewItem = (id) => (e) => {
        console.log(id);
        this.props.match.params.id = id;
        console.log(this.props.match)
        this.props.history.push('/details/:' + id)
    }
    render() {
        console.log(this.props.items);
        return this.props.items.map((item) => (
            <div className="item-short-desc" key={item.id}>
                <img className="item-list-dimension" src={item.img || logo} alt="item description"></img>
                <label>{item.description}</label>
                <div>Price: Rs {item.price}</div>
                <button className="details-button" onClick={this.viewItem(item.id)}>View</button>
            </div>
        ))
    }
}

ItemList.propTypes = {
    items: PropTypes.array.isRequired
}

export default withRouter(ItemList);