import React, { Component } from 'react';
import './Search.css';
import * as qs from 'query-string';
import { Grid, Row, Col } from 'react-bootstrap'
class Search extends Component {
    state = {
        numberOfNights: 0,
        listOfHotels: []
    }

    constructor(props) {
        super()
        const queryParams = qs.parse(props.location.search)
        this.state.numberOfNights = this.calculateNights(queryParams.start_date, queryParams.end_date)
        
        const url = 'https://api.myjson.com/bins/tl0bp'
        fetch(url, {method: 'GET'})
            .then(res => res.json())
            .then(res => this.filterHotels(res, queryParams.start_date, queryParams.end_date))
    }

    filterHotels(response, startDate, endDate) {
        this.setState({listOfHotels: response.hotels})
        console.log(this.state.listOfHotels)
    }

    calculateNights(startDate, endDate) {
        return Math.floor(Math.abs(endDate - startDate) / (24 * 60 * 60 * 1000))
    }

    render(props) {
        return (
            <div className="container">
                <h2>Number of Nights: {this.state.numberOfNights}</h2>
                <Grid align="center">
                    <Row>
                {
                    this.state.listOfHotels.map(function(hotel) {
                        return (
                            <Col xs={6} md={4}>
                                <div className="card Search-card">
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <label className="btn btn-primary">Go somewhere</label>
                                    </div>
                                </div>
                            </Col>
                        )
                    })
                }
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Search;
