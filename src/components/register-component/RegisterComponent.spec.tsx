import React from 'react';
import { mount, render, shallow, ShallowWrapper } from 'enzyme';
import RegisterComponent, { IRegisterProps } from './RegisterComponent';

import { NewUser } from '../../dtos/new-user';
import { Button, Typography, FormControl } from '@material-ui/core';
import { nextTick } from 'q';

describe('RegisterComponent', () => {

    beforeEach(() => {
        (props.registerAction as jest.Mock).mockClear();
    })

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

    it('Typing into input.firstName should reflect in firstName state', () => {
        const wrapper = mount(registerComponent);
        expect(wrapper.find('input#firstName')).toHaveLength(1);
        wrapper.find('input#firstName').simulate('change', { 
            target: { value: 'top-secret'}
        });
        console.log(wrapper.find('input#firstName').prop('value'));
        wrapper.update();
        expect(wrapper.find('input#firstName').prop('value')).toEqual('top-secret');
    });
})