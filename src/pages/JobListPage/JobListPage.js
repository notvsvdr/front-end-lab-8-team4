import React, { Component } from "react";
import { connect } from "react-redux";
import { jobList } from "../../actions";
import "./JobListPage.css";

class JobsPage extends Component {
    // TODO
    render() {
        return (
            <div>
                <p>HERE GOES JOB LIST</p>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.jobList
    };
};

const mapDispatchToProps = dispatch => {
    return {
        jobList: () => {
            dispatch(jobList());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(JobsPage);
