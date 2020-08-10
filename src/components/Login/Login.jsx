import React from 'react';
import { Field, reduxForm } from 'redux-form'

const LoginForm = (props) => {
  return (
    <form>
      <div>
        <Field name="login" placeholder="Login" component="input" />
      </div>
      <div>
        <Field name="password" placeholder="Password" component="input" />
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
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm />
    </div>
  );
};
export default Login;