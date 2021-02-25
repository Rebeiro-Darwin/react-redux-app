import React from 'react';
import Toast from 'react-bootstrap/Toast';

const Notification = (props) => {
    const status = props.updateStatus == '200' ? 'rgb(0, 204, 102)' : 'rgb(204, 0, 0)';
    const message = props.updateStatus == '200' ? 'Data has been updated.' : 'Failed to update data.'
    return (
        <div
            aria-live="polite"
            aria-atomic="true"
            style={{
                position: 'relative',
                minHeight: '100px',
            }}
        >
            <Toast
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    backgroundColor: status,
                }}
            >
                <Toast.Body>{message}</Toast.Body>
            </Toast>
        </div>
    )

};

export default Notification;