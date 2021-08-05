import React from 'react';
import styled from 'styled-components/macro';
import Profile from '../images/profile.png';
import { Link } from 'react-router-dom';
import Google from "../images/2.png"
import Keyboard from "../images/keyboardIcon2.png"
import {AiOutlineSearch} from "react-icons/ai"
import {FiSettings} from "react-icons/fi"
import SubNavbar from './SubNavbar';


const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  font-size: 14px;
  padding-top:30px;
`;

const NavLinks = styled(Link)`
  padding: 0 8px;
  text-decoration: none;
  color: #000;

  svg {
    height: 24px;
    width: 24px;
  }
`;
const Settings = styled(FiSettings)`
margin-right:15px;
`

const LeftContainer = styled.div`
  padding: 10px;
  margin-left: 15px;
  justify-content: space-between;
  display:flex;
  flex-direction:row;
`;

const RightLinks = styled.div`
  padding: 10px;
  margin-right: 16px;
  display: flex;
  align-items: center;
`;
const Img = styled.img`
display:flex;
height:30px;
width:92px;
margin-right:50px;
`;



const Form = styled.form``;

const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 14px;
  background: #fff; 
  border-radius: 24px;
  z-index: 3;
  height: 42px;
  margin: 0 auto;
width: 700px;
  margin-top:-7px;
  border: 1px solid transparent;
  box-shadow: 0 2px 5px 1px rgb(64 60 67 / 16%);
`;


const SearchIcon = styled(AiOutlineSearch)`
  color: #4285F4;
  height: 35px;
  width: 35px;
  padding-right: 10px;
  display: flex;
  align-items: center;

  & svg {
    fill: #9aa0a6;
  }
`;

const SearchInput = styled.input`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  height: 40px;
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.87);
  word-wrap: break-word;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  height: 34px;
  font-size: 16px;
`;

const MicIcon = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  border: 0;
  background: transparent;
  outline: none;
  padding: 0 8px;
  width: 40px;
  line-height: 44px;
  height: 44px;

  svg {
    height: 24px;
    width: 24px;
    vertical-align: middle;
  }

`;
const Divider = styled.div `
width:1px;
height:24px;
background:#f2f2f2;
`



// const KeyboardIcon = styled.img`
// height:24px;
// width:24px;
// vertical-align: middle;
// `

const Navbar2 = () => {
  return (
      <div>
    <Nav>
      <LeftContainer>
             <Img src={Google}></Img>

        <Form action='/' method='GET' role='search'>
              
          <Search>
           
  
            <SearchInput  type='text' />
            {/* <KeyboardIcon style={{ height:"24" , width:"24"}} src={Keyboard}></KeyboardIcon> */}
            <Divider/>
            <MicIcon>
              <svg
                focusable='false'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill='#4285f4'
                  d='m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z'
                />
                <path fill='#34a853' d='m11 18.08h2v3.92h-2z' />
                <path
                  fill='#fbbc05'
                  d='m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z'
                />
                <path
                  fill='#ea4335'
                  d='m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z'
                />
              </svg>
            </MicIcon>
            <SearchIcon>
              <svg
                focusable='false'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
              >
                <path d='M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' />
              </svg>
            </SearchIcon>
          </Search>
        </Form>
      </LeftContainer>
      <RightLinks>
        <NavLinks
          to='/'
          css={`
            padding-right: 20px;
          `}
        >
            <Settings/>
          <svg focusable='false' viewBox='0 0 24 24'>
            <path d='M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z' />
          </svg>
        </NavLinks>
        <Link to='/'>
          <img src={Profile} alt='profile' />
        </Link>
      </RightLinks>
    </Nav>
    <SubNavbar/>
    </div>
  );
};

export default Navbar2;
