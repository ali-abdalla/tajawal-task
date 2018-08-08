import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import './Home.css';
import DatePicker from 'react-date-picker';
// import DatePicker from 'react-date-picker/dist/entry.nostyle';

class Home extends Component {
    state = {
        startDate: new Date(),
        endDate: new Date()
    };

    onStartDateChange = startDate => this.setState({ startDate })

    onEndDateChange = endDate => this.setState({ endDate })

    search = () => {
        console.log()
    }

    render() {
        return (
            <Jumbotron>
                <h1>Search for hotels all around the world</h1>
                <DatePicker className="Home-date-picker" clearIcon={null} required={true} onChange={this.onStartDateChange} value={this.state.startDate} />
                <DatePicker className="Home-date-picker" clearIcon={null} required={true} onChange={this.onEndDateChange} value={this.state.endDate} />
                <br />
                <Button bsStyle="danger" onClick={this.search}>Search</Button>
            </Jumbotron>
        );
    }
}

export default Home;
