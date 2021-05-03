import React, { useState } from 'react';
import './Modal.css';

export default function Modal(props: any) {
    const [editing, setEditing] = useState(false);
    const [editDesc, setEditDesc] = useState(props.photo.description);

    if (props.show === false) {
        return null;
    }

    const onSubmit = (e: any) => {
        e.preventDefault();
        props.updatePhotoDesc(props.photo.id, editDesc);
        setEditing(false);
    }

    const renderEditForm = () => {
        return (
            <form onSubmit={e => onSubmit(e)}>
                <label htmlFor='desc'>Edit Description</label><br />
                <input type='text' value={editDesc} onChange={e => setEditDesc(e.target.value)} /><br />
                <button type='submit'>Submit</button>
            </form>
        )
    }

    const renderStaticDescription = () => {
        return <p>{props.photo.description}</p>
    }

    const handleModalClose = async () => {
        await setEditing(false);
        props.handleCloseClick();
    }

    return (
        <div className='backdrop' onClick={() => props.handleCloseClick()}>
            <div className='Modal'>
                <h2>Modal</h2>
                <img src={props.photo.url} alt='' />
                <br />
                <div>
                    {editing === true
                        ? renderEditForm()
                        : renderStaticDescription()}
                    <button onClick={() => setEditing(!editing)}>
                        Add/Edit Description
                </button>
                </div>
                <button onClick={() => handleModalClose()}>Close</button>
            </div>
        </div>
    )
}