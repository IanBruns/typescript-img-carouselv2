import React from 'react';
import './ImageGrid.css'

export default function ImageGrid(props: any) {

    let propGrid = props.photos.map((img: any) => {
        return <img className='thumb' key={img.id} src={img.thumbnailUrl} alt=''
            onClick={() => props.handlePhotoClick(img)} />
    })

    return (
        <React.Fragment>
            <div className='wrapper'>
                {propGrid}
            </div>
        </React.Fragment>
    )
}