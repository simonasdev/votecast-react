import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as mainPageActions from './MainPage.actions';
import { Header, Uploader, SongList } from './components';


class MainPage extends React.Component {
    render () {
        return (
            <div>
                {Header({userName: this.props.userName})}
                <hr />
                <Uploader />
                <hr />
                <SongList />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const initFormValues = {
        name: 'defaultName',
        pass: 'defaultPass'
    };
    return {
        userName: initFormValues.name
    }
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(mainPageActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);