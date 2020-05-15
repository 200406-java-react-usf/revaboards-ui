import * as React from 'react';
import { mount, render, shallow, ShallowWrapper } from 'enzyme';
import RegisterComponent, { IRegisterProps } from './RegisterComponent';

import { FormControl } from '@material-ui/core';

describe('RegisterComponent', () => {

    const setState = jest.fn();
    const useStateMock: any = (initState: any) => [initState, setState]


    beforeEach(() => {
        (props.registerAction as jest.Mock).mockClear();
    })

    afterEach(() => {
        jest.clearAllMocks();
    });

    const props: IRegisterProps = {
        authUser: undefined,
        errorMessage: 'test',
        registerAction: jest.fn()
    };

    const registerComponent =
        <RegisterComponent {...props} />

    it('Should render', () => {
        const wrapper = shallow(registerComponent);
        expect(wrapper.exists()).toBeTruthy();
    })

    it('Should render 5 FormControls', () => {
        const wrapper = mount(registerComponent);
        expect(wrapper.find(FormControl)).toHaveLength(5)
    })

    it('Should render 5 input fields', () => {
        const wrapper = mount(registerComponent);
        expect(wrapper.find('input')).toHaveLength(5);
    });

    it('Should render a button', () => {
        const wrapper = mount(registerComponent);
        expect(wrapper.find('button')).toHaveLength(1)
    });

    it('Having not clicked button, registerAction should not have been called', () => {
        const wrapper = mount(registerComponent);
        expect(props.registerAction).not.toHaveBeenCalled();
    });

    it('Clicking button should trigger call to property registerAction', () => {
        const wrapper = mount(registerComponent);
        wrapper.find('button').simulate('click');
        expect(props.registerAction).toHaveBeenCalled();
    });

    it('Typing into input.firstName trigger state hook on firstName', () => {
        let wrapper = mount(registerComponent);
        wrapper.find('input#firstName').simulate('change', {
            target: { value: 'top-secret' }
        });
        expect(wrapper.find('input#firstName').prop('value')).toEqual('top-secret');
    });

    it('Typing into input.firstName trigger state hook on firstName', () => {
        let wrapper = mount(registerComponent);
        wrapper.find('input#firstName').simulate('change', {
            target: { value: 'top-secret' }
        });
        expect(wrapper.find('input#firstName').prop('value')).toEqual('top-secret');
    });


    it('Typing into input.lastName trigger state hook on lastName', () => {
        let wrapper = mount(registerComponent);
        wrapper.find('input#lastName').simulate('change', {
            target: { value: 'Anonymous' }
        });
        wrapper.update();
        expect(wrapper.find('input#lastName').prop('value')).toEqual('Anonymous');
    });

    it('Typing into input.firstName should reflect in firstName state', () => {
        jest.spyOn(React, 'useState').mockImplementation(useStateMock);
        let wrapper = mount(registerComponent);
        wrapper.find('input#firstName').simulate('change', {
            target: { value: 'top-secret' }
        });
        expect(setState).toHaveBeenCalledWith('top-secret');
    });


    it('Typing into input.lastName should reflect in lastName state', () => {
        jest.spyOn(React, 'useState').mockImplementation(useStateMock);
        let wrapper = mount(registerComponent);
        wrapper.find('input#lastName').simulate('change', {
            target: { value: 'Anonymous' }
        });
        expect(setState).toHaveBeenCalledWith('Anonymous');
    });

})