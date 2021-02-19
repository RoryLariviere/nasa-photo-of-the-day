import React from 'react';
import styled from 'styled-components'

const ImageSectionStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
`
// const StyledDate = styled.div`
//   background-color: #444444;
//   color: #E0E0E0;
//   width: 30vw;
//   padding-top: 2px;
//   padding-bottom: 2px;
//   margin-left: 450px;
//   border-top-left-radius: 25px;
//   border-top-right-radius: 25px;
//   `

const CreditTitleDiv = styled.div`
    background-color: #444444;
    color: #E0E0E0;
    width: 20vw;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    margin-top: -4px;
`
const ExplanationStyle = styled.div`
    background-color: #444444;
    color: #E0E0E0;
    border-radius: 25px 0px 25px 0px;
    margin-top: 25px;
    margin-bottom: 25px; 
`
const DateDiv = styled.div`
    width: 20vw;
    background-color: #444444;
    color: #E0E0E0;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
`

export default function ApodImg (props) {
    const { apodData } = props;

    return (
        <ImageSectionStyle className='img-section'>
            <DateDiv>
                <p><strong>Date:</strong> {apodData.date}</p>
            </DateDiv>
            <div>
                <img alt='apod' className='apod-img' src={apodData.url}/>
            </div>
            <CreditTitleDiv>
                <p>
                <strong>
                    {apodData.title}<br></br>Image Credit & copyright: {apodData.copyright}
                </strong>
                </p>
            </CreditTitleDiv>
            <ExplanationStyle>
                <p><strong>Explanation: </strong>{apodData.explanation}</p>
            </ExplanationStyle>
        
    </ImageSectionStyle>
    )
}
