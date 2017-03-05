import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appActions from './App.actions';
import { LandingPage } from '../landingpage';
import { LoginPage } from '../loginpage';
import { MainPage } from '../mainpage';
import { AppStyles } from './assets';


class App extends React.Component {
    pageSelector (activePage, actions) {
        if (activePage === undefined || activePage === '') {
            activePage = 'PAGE_LANDING';
        }
        //activePage = 'PAGE_MAIN'; // DEV
        switch (activePage) {
            case 'PAGE_LANDING': {
                return (
                    <div>
                        {LandingPage(actions)}
                    </div>
                );
            }
            case 'PAGE_LOGIN': {
                return (
                    <div>
                        <LoginPage passedProps={this.props} />
                    </div>
                );
            }
            case 'PAGE_MAIN': {
                return (
                    <div>
                        <MainPage />
                    </div>
                );
            }
            default: {
                return (
                    <div>
                        {LandingPage(actions)}
                    </div>
                );
            }
        }
    }

    render () {
        return (
            <div className=''>
                {this.pageSelector(this.props.activePage, this.props.actions)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        activePage: state.app.app.activePage
    }
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(appActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);