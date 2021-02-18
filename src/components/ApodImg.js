import React from 'react';

export default function ApodImg (props) {
    const { apodData } = props;

    return (
        <div className='img-section'>
         <img
           alt='apod'
           className='apod-img'
           src={apodData.url}
        />
        <p>
        <strong>
            {apodData.title}<br></br>Image Credit & copyright: {apodData.copyright}
        </strong>
        </p>
        <p><strong>Explanation: </strong>{apodData.explanation}</p>
        
    </div>
    )
}
