import { IState } from "../../reducers";
import HomeComponent from "./HomeComponent";
import { connect } from "react-redux";

const mapStateToProps = (state: IState) => {
    return {
        username: state.login.authUser?.username
    }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
