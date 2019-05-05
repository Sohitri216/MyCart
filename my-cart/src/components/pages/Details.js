import React, { Component } from 'react';

class Details extends Component {
    componentDidMount() {
        // const { match: { params } } = this.props;
        console.log('hii',this.props);
    }
    render() {
        console.log(this.props.match)
        return (
           
            <React.Fragment>
                
                <div>Details Page!{this.props.match.params.id}</div>
            </React.Fragment>
        );
    }
}

export default Details;