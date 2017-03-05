import React from 'react';
import { Field, reduxForm } from 'redux-form';


class LoginForm extends React.Component {
    render() {
        return (
            <div>
                Login form
                <form onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
                    <div>
                        <span>
                            Name:
                        </span>
                        <Field name='name'
                            component='input'
                            type='text'
                            required='required'
                        />
                    </div>
                    <div>
                        <span>
                            Password:
                        </span>
                        <Field name='pass'
                            component='input'
                            type='text'
                            required='required'
                        />
                    </div>
                    <button type='submit' onClick={() => {
                        this.props.submit();
                    }}>
                        Log in
                    </button>
                </form>
            </div>
        );
    }
}
    

LoginForm = reduxForm({
     form: 'loginForm'
})(LoginForm);

export default LoginForm;