import React from 'react';
import { Field, reduxForm } from 'redux-form'

const LoginForm = (props) => {
  return (
    <form>
      <div>
        <input placeholder={"Login"} />
      </div>
      <div>
        <input placeholder={"Password"} />
      </div>
      <div>
        <label>
          <input type={"checkbox"} />
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