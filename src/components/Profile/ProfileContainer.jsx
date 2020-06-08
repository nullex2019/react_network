import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfileThunkCreator} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2
        } // если userId нет загружаем 2 пользователя
        this.props.getUserProfileThunkCreator(userId)
    }

    render() {

        return <div>
            <Profile {...this.props} profile={this.props.profile}/>
        </div>
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

export default compose(
    connect(mapStateToProps,{getUserProfileThunkCreator}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)