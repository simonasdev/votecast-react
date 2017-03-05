import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as uploaderActions from './Uploader.actions';
import { UrlForm } from './components';


const initFormValues = {
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
};

class Uploader extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmitButtonClick = this.onSubmitButtonClick.bind(this);
    }

    onSubmitButtonClick(values) {
        this.props.actions.uploadSongUrl({
            data: {
                songUrl: values.url
            }
        });
    }

    render () {
        return (
            <div>
                <UrlForm
                    onSubmit={this.onSubmitButtonClick}
                    initialValues={initFormValues}
                    passedProps={{
                        uploadStatus: this.props.uploadStatus
                    }}
                />
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
        uploadStatus: ifUndef(state.mainPage.uploader.uploader, 'uploadStatus', '')
    }
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(uploaderActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Uploader);
