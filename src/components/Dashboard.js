import React from "react";

const Dashboard = props => {
    return (
        <div>
            <div>
                <h1 className="earwig">Dashboard</h1>
                <h1>Status: {props.loggedInStatus}</h1>
                <button onClick={() => this.handleLogoutClick()}>Logout</button>
            </div>
        </div>
    );
};

export default Dashboard;