import { IState } from "../../reducers";
import { loginAction } from '../../actions/login-action';
import LoginComponent from "./LoginComponent";
import { connect } from "react-redux";

const mapStateToProps = (state: IState) => {
    return {
        authUser: state.login.authUser,
        errorMessage: state.login.errorMessage
    }
}

const mapDispatchToProps = {
    loginAction
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
