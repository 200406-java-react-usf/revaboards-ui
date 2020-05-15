import { IState } from "../../reducers";
import RegisterComponent from "./RegisterComponent";
import { connect } from "react-redux";
import { registerAction } from '../../actions/register-action';

const mapStateToProps = (state: IState) => {
    return {
        authUser: state.login.authUser,
        errorMessage: state.register.errorMessage
    }
}

const mapDispatchToProps = {
    registerAction
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterComponent);
