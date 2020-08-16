import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls';
import {required} from './../../utilities/validators/validators';

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field validate={[required]} name="login" placeholder="Login" component={Input} />
      </div>
      <div>
        <Field validate={[required]} name="password" placeholder="Password" component={Input} />
      </div>
      <div>
        <label>
          <Field name="rememberMe" type="checkbox" component="input" />
            Remember Me
          </label>
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  }
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  );
};
export default Login;