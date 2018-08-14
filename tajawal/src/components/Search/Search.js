import React, { Component } from 'react';
import './Search.css';
import * as qs from 'query-string';
import { Button } from 'react-bootstrap';

class Search extends Component {
    state = {
        numberOfNights: 0
    }

    constructor(props) {
        super()
        const queryParams = qs.parse(props.location.search);
        const url = 'https://api.myjson.com/bins/tl0bp'
        fetch(url, {method: 'GET'})
            .then(res => res.json())
            .then(res => this.filterHotels(res, queryParams.start_date, queryParams.end_date))
    }

    filterHotels(hotels, startDate, endDate) {
        this.setState({ numberOfNights: this.calculateNights(startDate, endDate) })
    }

    calculateNights(startDate, endDate) {
        return Math.floor(Math.abs(endDate - startDate) / (24 * 60 * 60 * 1000))
    }

    render(props) {
        return (
            <div className="container">
                <h2>Number of Nights: {this.state.numberOfNights}</h2>
                <Button bsStyle="default">Sort by Name</Button>&nbsp;
                <Button bsStyle="default">Sort by Price</Button>
            </div>
        );
    }
}

export default Search;
