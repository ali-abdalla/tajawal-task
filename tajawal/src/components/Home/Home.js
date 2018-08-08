import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import './Home.css';
import DatePicker from 'react-date-picker';

class Home extends Component {
    state = {
        startDate: new Date(),
        endDate: new Date()
    };

    onStartDateChange = startDate => this.setState({ startDate })

    onEndDateChange = endDate => this.setState({ endDate })

    render() {
        return (
            <Jumbotron>
                <h1>Search around the world</h1>
                <DatePicker onChange={this.onStartDateChange} value={this.state.startDate} />
                <DatePicker onChange={this.onEndDateChange} value={this.state.endDate} />
            </Jumbotron>
        );
    }
}

export default Home;
