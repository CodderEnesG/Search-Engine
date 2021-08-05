import React from 'react'
import styled from "styled-components"


const Container = styled.div`
background: #fff;
height: 58px;
padding: 0;
position: relative;
z-index: 126;
white-space: nowrap;
display:flex;
align-items:center;
`
const ItemsSection = styled.div`
padding-left:175px;
padding-top:15px;
`

function SubNavbar() {
    return (
        <Container>
             <ItemsSection>
            <div style={{fontFamily:"GoogleSans" , fontSize:"18px" , color:"#5f6368" , lineHeight: "16px"}}>Haberler</div>
            </ItemsSection>
        </Container>
    )
}

export default SubNavbar
