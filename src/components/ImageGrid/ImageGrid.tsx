import React from 'react';
import Photo from '../../types/Photo'
import './ImageGrid.css'

export default function ImageGrid(props: any) {

    let propGrid = props.photos.map((img: Photo) => {
        return <img className='thumb' key={img.id} src={img.thumbnailUrl} alt=''
            onClick={() => props.handlePhotoClick(img)} />
    })

    return (
        <div className='Grid'>
            <div className='wrapper'>
                {propGrid}
            </div>
        </div>
    )
}