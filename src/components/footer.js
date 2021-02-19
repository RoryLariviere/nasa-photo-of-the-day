import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.div`
    background-color: #212121;
    color: #E0E0E0;
    padding-top: 100px;
`

export default function Footer (props) {
    return (
        <div className='footer'>
            <FooterStyle>
                <small>&copy; Copyright 2021, BuzzDev LLC</small>
            </FooterStyle>
        </div>
    )
}