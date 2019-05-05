import React, { Component } from 'react';
import PostData from '../../JSON/data.json';
import axios from'axios';

class Details extends Component {
    componentDidMount() {
        console.log('hii',this.props, PostData);
        axios.get('http://api.openweathermap.org/data/2.5/forecast'+ "?lat=" + '22.04' + "&lon=" + '88.12' + "&cnt=" + 5 + "&APPID=" + '59f3090a217f217c1fdb4d9e0edfee66')
        .then(res=>console.log(res));
    }
    render() {
        // console.log(this.props.match)
        return (
           
            <React.Fragment>
                
                <div>Details Page!{this.props.match.params.id}</div>
            </React.Fragment>
        );
    }
}

export default Details;