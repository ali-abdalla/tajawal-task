import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import './Home.css';
import DatePicker from 'react-date-picker';
// import DatePicker from 'react-date-picker/dist/entry.nostyle';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
  
class Home extends Component {
    state = {
        startDate: new Date(),
        endDate: new Date(),
        valid: true
    };

    onStartDateChange = startDate => {
        this.setState({ startDate })
        this.setState({ valid: !isNaN(this.state.startDate.getTime()) && !isNaN(this.state.endDate.getTime()) })
    }

    onEndDateChange = endDate => {
        this.setState({ endDate })
        this.setState({ valid: !isNaN(this.state.startDate.getTime()) && !isNaN(this.state.endDate.getTime()) })
    }

    render() {
        return (
            <Jumbotron>
                <h1>Search for hotels all around the world</h1>
                <br />
                <span className="Home-date-picker">
                    <span className="Home-date-picker-label">From: </span><DatePicker clearIcon={null} required={true} onChange={this.onStartDateChange} value={this.state.startDate} />
                </span>
                <span className="Home-date-picker">
                    <span className="Home-date-picker-label">To: </span><DatePicker clearIcon={null} required={true} onChange={this.onEndDateChange} value={this.state.endDate} />
                </span>
                <br />
                <Link to={`/search?start_date=${this.state.startDate.getTime()}&end_date=${this.state.endDate.getTime()}`} ><Button bsStyle="danger" className="Home-search" disabled={!this.state.valid}>Search</Button></Link>
            </Jumbotron>
        );
    }
}

export default Home;
