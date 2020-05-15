import { NewUser } from "../dtos/new-user"
import { Dispatch } from "redux"
import { register } from "../remote/user-service"
import { loginActionTypes } from "./login-action"

export const registerActionTypes = {
    SUCCESSFUL_REGISTRATION: 'DEVBOARDS_SUCCESSFUL_REGISTRATION',
    BAD_REQUEST: 'DEVBOARDS_BAD_REQUEST',
    INTERNAL_SERVER_ERROR: 'DEVBOARDS_INTERNAL_SERVER_ERROR'
}

export const registerAction = (newUser: NewUser) => async (dispatch: Dispatch) => {

    try {

        let registeredUser = await register(newUser);
        dispatch({
            type: registerActionTypes.SUCCESSFUL_REGISTRATION,
            payload: registeredUser
        });
        
        dispatch({
            type: loginActionTypes.SUCCESSFUL_LOGIN,
            payload: registeredUser
        });

    } catch (e) {

        let status = e.response.data.statusCode;
        if (status === 400) {
            dispatch({
                type: registerActionTypes.BAD_REQUEST,
                payload: e.response.data.message
            });
        } else {
            dispatch({
                type: registerActionTypes.INTERNAL_SERVER_ERROR,
                payload: e.response.data.message || 'Uh oh! We could not reach the server!'
            });
        }

    }

}
