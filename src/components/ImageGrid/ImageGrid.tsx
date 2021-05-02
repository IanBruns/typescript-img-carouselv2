import React from 'react';
import './ImageGrid.css'

export default function ImageGrid(props: any) {

    let propGrid = props.photos.map((img: any) => {
        return <img key={img.id} src={img.thumbnailUrl} alt='' />
    })

    return (
        <React.Fragment>
            <h2>Hi, mom!</h2>
            <div className='wrapper'>
                {propGrid}
            </div>
        </React.Fragment>
    )
}