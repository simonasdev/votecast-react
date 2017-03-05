import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loginPageActions from './LoginPage.actions';
import { LoginForm } from './components';


const initFormValues = {
    name: 'makerfest',
    pass: '2017'
};

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmitButtonClick = this.onSubmitButtonClick.bind(this);
    }
    
    onSubmitButtonClick(values) {
        let userInput = {
            name: values.name,
            pass: values.pass
        };
        this.props.actions.authorizeUser({
            data: userInput,
            actions: this.props.passedProps.actions
        });
    }

    render () {
        return (
            <div>
                <LoginForm
                    onSubmit={this.onSubmitButtonClick}
                    initialValues={initFormValues}
                />
                <div>
                    {this.props.loginStatus}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const ifUndef = (path, propName, propValIfUndef) => {
        if (path) {
            return path[propName];
        }
        return propValIfUndef;
    }
    return {
        loginStatus: ifUndef(state.loginpage.loginpage, 'loginStatus', '')
    }
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(loginPageActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);