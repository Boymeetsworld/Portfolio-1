import React, { Component } from 'react';
import Evolution from '../Assets/vector-silhouette-generation-men-white-background-49118821.jpeg';

class AgeStats extends Component {
    timeSince(date) {
        let today = new Date().getTime();
        let other_date = new Date(date).getTime();
        let difference = Math.abs(today - other_date);

        let days = Math.floor(difference / (1000*3600*24));
        let years = Math.floor(days/365);
        days -= years*365;
        let months = Math.floor(days/31);
        days -= months*31;

        return `${years} years, ${months} months, and ${days} days`
    }

    render() {
        return (
            <div>
                <h3>{this.props.date}</h3>
                <h4>Congrats you've been around for {this.timeSince(this.props.date)}.</h4>
                <img src={Evolution} alt="evolution" className="evolution" />
            </div>
        )
    }
}

export default AgeStats;