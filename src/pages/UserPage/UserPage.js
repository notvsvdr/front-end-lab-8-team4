import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import './UserPage.css';

class UserPage extends Component {
    render() {
        return (
            <div>
                <p>USER PROFILE</p>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        CurUser: state.user.CurUser
    };
};

export default connect(mapStateToProps, null)(UserPage);
