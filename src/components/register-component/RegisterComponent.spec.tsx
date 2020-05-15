import * as React from 'react';
import { shallow } from 'enzyme';
import RegisterComponent, {IRegisterProps} from './RegisterComponent';

/* Default Properties for rendering RegisterComponent */
/* 
    RegisterComponent is dependent on these properties, so they must
    be supplied 
*/
const props: IRegisterProps = {
    authUser: undefined,
    errorMessage: '',
    registerAction: jest.fn()
}

describe('<RegisterComponent />', () => {
    it('Renders without error', () => {
        // Shallowly render the RegisterComponent with properties 
        const wrapper = shallow(<RegisterComponent {...props} />)

        /* 
            {...props} usage here is equivalent to:
            
            authUser={props.authUser}
            errorMessage={props.errorMessage}
            registerAction={props.registerAction}
        /*


        // Expect that the component should render and contain content
        expect(wrapper.exists()).toBeTruthy();
    });
});