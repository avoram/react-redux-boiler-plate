import React, { Component } from 'react';

class Dashboard extends Component {
    componentDidMount() {
        console.log(this.props)
    }
    render () {
        return (
            <div>
                <h1>The Dashboard Page</h1>
            </div>
        );
    }
}

export default Dashboard;