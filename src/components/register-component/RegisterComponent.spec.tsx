import * as React from 'react';
import { shallow, mount, ReactWrapper } from 'enzyme';
import RegisterComponent, { IRegisterProps } from './RegisterComponent';
import { FormControl } from '@material-ui/core';

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



const registerComponent = <RegisterComponent {...props} />;

describe('<RegisterComponent />', () => {

    // When setState is called, we will be able to spy
    // on that action, as we will provide the setState function
    // as a mock function

    // Note: Doing this will break the tests that check
    // input fields.
    const setState = jest.fn();
    const useStateMock: any = (init: any) => [init, setState];

    describe('Rendered Form', () => {
        // Shallowly render the RegisterComponent with properties 
        /* 
            {...props} usage here is equivalent to:
            
            authUser={props.authUser}
            errorMessage={props.errorMessage}
            registerAction={props.registerAction}
        */
        const wrapper = mount(<RegisterComponent {...props} />)

        it('Renders without error', () => {
            // Expect that the component should render and contain content
            expect(wrapper.exists()).toBeTruthy();
        });

        it('Renders 5 FormControl components', () => {
            // wrapper.find(selector) - Finds all nodes matching the selector
            expect(wrapper.find(FormControl)).toHaveLength(5);
        });

        it('Renders 5 input elements', () => {
            expect(wrapper.find('input')).toHaveLength(5);
        });

        it('Renders a button', () => {
            expect(wrapper.find('button')).toHaveLength(1);
        });
    })

    describe('Form field behavior', () => {

        let wrapper: ReactWrapper;

        beforeEach(() => {
            wrapper = mount(registerComponent);
        })

        it('should update #firstName value when change event triggered', () => {
            wrapper.find('input#firstName').simulate('change', {
                target: { value: 'new-firstName' }
            });

            // #firstName should have a value of 'new-firstName' after the change event is handled
            expect(wrapper.find('input#firstName').prop('value'))
                .toEqual('new-firstName');
        })

        it('should update #lastName value when change triggered', () => {
            wrapper.find('input#lastName').simulate('change', {
                target: { value: 'new-lastName' }
            });

            expect(wrapper.find('input#lastName').prop('value'))
                .toEqual('new-lastName');
        });

        it('should call prop registerAction when button is clicked', () => {
            wrapper.find('button').simulate('click');
            expect(props.registerAction).toHaveBeenCalled();
        });
    });

    /*
        Blackbox Testing - Testing only input/output and side affects where
                necessary
        Whitebox testing - Testing internal behavior that you would not see
                from the outside.
    */

    describe('state management', () => {
        afterEach(() => {
            jest.clearAllMocks();
        });

        it('calls setState when #firstName changed', () => {
            jest.spyOn(React, 'useState')
                .mockImplementation(useStateMock);

            const wrapper = mount(registerComponent);
            
            wrapper.find('input#firstName').simulate('change', {
                target: { value: 'Abby'}
            });
            expect(setState).toHaveBeenCalledWith('Abby');

        });

        it('calls setState when #lastName changed', () => {
            jest.spyOn(React, 'useState')
            .mockImplementation(useStateMock);

            const wrapper = mount(registerComponent);
            wrapper.find('input#lastName').simulate('change', {
                target: {value: 'Mitch'}
            })
            expect(setState).toHaveBeenCalledWith('Mitch');
        });

    })



});