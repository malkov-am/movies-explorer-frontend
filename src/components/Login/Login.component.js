import React from 'react';
import './Login.styles.scss';
import SignForm from '../SignForm/SignForm.component';

const Login = () => {
    return (
        <>
            <SignForm title='Рады видеть!' buttonTitle='Войти'>
              <label className='sign__form-label'>E-mail
                <input name='email' className='sign__form-input' type='text' />
              </label>
              <label className='sign__form-label'>Пароль
                <input name='password' className='sign__form-input' type='text' />
              </label>
            </SignForm>
        </>
    );
};

export default Login;
