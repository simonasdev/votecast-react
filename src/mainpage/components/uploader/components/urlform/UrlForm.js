import React from 'react';
import { Field, reduxForm } from 'redux-form';


class UrlForm extends React.Component {
    updateButtonClassName() {
        if (this.props.passedProps.uploadStatus === '' || this.props.passedProps.uploadStatus === undefined) {
            return 'default';
        } else if (this.props.passedProps.uploadStatus === 'UPLOADING') {
            return 'uploading';
        } else if (this.props.passedProps.uploadStatus === 'UPLOAD_SUCCESS') {
            return 'upload-success';
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
                    <div>
                        <span>
                            url:
                        </span>
                        <Field name='url'
                            component='input'
                            type='text'
                            style={{width:'500px'}}
                        />
                    </div>
                    <div>
                        <button className={this.updateButtonClassName()} style={{width: '100%', height: '50px', background: 'green'}}
                            type='submit' onClick={() => {
                                this.props.submit(this.updateButtonClassName());
                            }} disabled={this.props.passedProps.uploadStatus === 'UPLOADING'}
                        >
                        <div>
                            Send
                        </div>
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}


UrlForm = reduxForm({
     form: 'urlForm'
})(UrlForm);

export default UrlForm;