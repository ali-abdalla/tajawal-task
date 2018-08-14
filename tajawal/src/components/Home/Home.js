import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import './Home.css';
import DatePicker from 'react-date-picker';
// import DatePicker from 'react-date-picker/dist/entry.nostyle';

class Home extends Component {
    state = {
        startDate: new Date(),
        endDate: new Date(),
        valid: true
    };

    onStartDateChange = startDate => {
        this.setState({ startDate })
        this.setState({ valid: !isNaN(this.state.startDate.getTime()) && !isNaN(this.state.endDate.getTime()) })
        console.log('valid state: ', this.state.valid);
    }

    onEndDateChange = endDate => {
        this.setState({ endDate })
        this.setState({ valid: !isNaN(this.state.startDate.getTime()) && !isNaN(this.state.endDate.getTime()) })
        console.log('valid state: ', this.state.valid);

    }

    search = () => {
        this.props.history.push('/search')
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
                <Button bsStyle="danger" className="Home-search" disabled={!this.state.valid} onClick={this.search}>Search</Button>
            </Jumbotron>
        );
    }
}

export default Home;
