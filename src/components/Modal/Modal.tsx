import React from 'react';

export default function Modal(props: any) {
    if (props.show === false) {
        return null;
    }

    return (
        <div className='Modal'>
            <h2>Modal</h2>
            <img src={props.photo.url} alt='' />
            <button onClick={() => props.handleCloseClick()}>Close</button>
        </div>
    )
}