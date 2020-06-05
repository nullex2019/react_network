import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {userId=2} // если userId нет загружаем 2 пользователя


        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
    }

    render() {

        return <div>
            <Profile {...this.props} profile={this.props.profile}/>
        </div>
    }
}
let MapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainer = withRouter(ProfileContainer) ///обертка для ProfileContainer

export default connect(MapStateToProps,{setUserProfile})(WithUrlDataContainer) ;