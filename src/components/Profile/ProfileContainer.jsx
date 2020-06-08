import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import { getUserProfileThunkCreator} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2
        } // если userId нет загружаем 2 пользователя
        this.props.getUserProfileThunkCreator(userId)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to="/Login"/>
        return <div>
            <Profile {...this.props} profile={this.props.profile}/>
        </div>
    }
}
let MapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

let WithUrlDataContainer = withRouter(ProfileContainer) ///обертка для ProfileContainer

export default connect(MapStateToProps,{getUserProfileThunkCreator})(WithUrlDataContainer) ;