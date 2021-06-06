import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from '../config/config';

const NavWrapDiv = styled.div`
  float: right;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  
  @media only screen and (max-width: 980px) {
    width: 80%;
    text-align: right;
  }
  @media only screen and (max-width: 800px) {
    display: none;
    width: 100%;
    background: #EEB01B;
    position: absolute;
    top: 85px;
    border-top: 3px solid #15AC95;
    left: 0;
    z-index: 999;

    &.show_menu {
      display: block;
    }
  }
`;

const StyledLi = styled.li`
  display: inline-block;
  font-size: 14px;
  &.desktop--hide {
    display: none;
  }
  a {
    display: inline-block;
    padding: 10px;
    min-width: 175px;
    color: ${COLORS.Light_Black};
    background: ${COLORS.Gray};
    text-align: center;
    text-decoration: none;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      background: ${COLORS.Light_Gray};
    }
  }
  @media only screen and (max-width: 1599px) {
    a {
      min-width: 150px;
    }
  }
  @media only screen and (max-width: 1000px) {
    a {
      min-width: 75px;
    }
  }
  @media only screen and (max-width: 800px) {
    display: block;
    width: 100%;
    text-align: left;
    &.desktop--hide {
      display: block;
    }
    a {
      display: block;
      color: #333;
      width: 100%;
      margin: 0;
      font-size: 16px;
      text-align: left;
      border-bottom: 1px solid ${COLORS.White};
      padding: 20px 15px;
    }
  }
`;

const MobileMenuSpan = styled.label`
  display: none;
  margin: auto;
  color: ${COLORS.White};
  border-bottom: 0.1px solid ${COLORS.White};
  width: 27px;
  cursor: pointer;
  padding-top: 18px;
  top: 4px;
  position: relative;

  span {
    display: block;
    position: absolute;
    width: 27px;
    height: 3px;
    border-radius: 30px;
    right: 0;
    margin-right: 15px;
    background: #43bba9;
    -webkit-transition: .2s ease;
    -ms-transition: .2s ease;
    -moz-transition: .2s ease;
    -o-transition: .2s ease;
    transition: .2s ease;
    top: 23px;
    
    &:first-child {
      top: 15px;
    }
    &:last-child {
      top: 31px;
    }
  }

  @media only screen and (max-width: 800px) {
    display: block;
  }
`;

const HelloP = styled.p`
  text-align: right;
  margin-top: 5px;
  margin-bottom: 20px;
  position: relative;
  font-size: 1rem;
`;

const Dropbtn = styled.div`
  display: inline-block;
  color: #8595ff;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  font-size: 1rem;
  text-decoration: none;
  margin: 2px 10px;
  &::after {
	  content: "\f107";
    color: #8595b1;
	  margin-left: 5px;
    font: normal normal normal 16px/1 FontAwesome;
  }
`;

const DropDownContent = styled.div`
  display: none;
  position: absolute;
  right: 0;
  width: 150px;
  background: ${COLORS.White};
  border: 1px solid ${COLORS.Light_Gray};
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 3px;
`;

const DropDownLi = styled(StyledLi)`
  display: inline-block;
  font-size: 1rem;
  &:hover {
	  transition: all 1s ease-in-out;
    color: ${COLORS.Light_Black};
  }
  &:hover ${DropDownContent} {
	  transition: all 1s ease-in-out;
    display: block;
    background: ${COLORS.White};
  }
  a {
    text-decoration: none;
    display: block;
    text-align: left;
    margin: 0;
    float: none !important;
    padding: 15px;
    min-width: auto;
    background: none;
    border-bottom: 1px solid ${COLORS.Gray};
    color: ${COLORS.Light_Black};
    cursor: pointer;
    font-size: 0.85rem;
    transition: all 0.3s ease-in-out;
    &:last-child {
      border-bottom: none;
    }
    &:hover {
      color: ${COLORS.Light_Black};
      background: none;
      font-weight: bold;
    }
  }
`;


export const NavBar = () => {
    return (
      <NavWrapDiv>
        <HelloP>
          <StyledUl>
            <DropDownLi>
              Hello, 
              <Dropbtn>
                Username
              </Dropbtn>
              <DropDownContent>
                <Link to="/profile">My Account</Link>
                <Link to="/logout">Sign Out</Link>
              </DropDownContent>
            </DropDownLi>
          </StyledUl>          
        </HelloP>

        <input type="checkbox" id="mobile_status" />
        <MobileMenuSpan htmlFor="mobile_status">
          <span></span>
          <span></span>
          <span></span>
        </MobileMenuSpan>
        <StyledUl id="mobile_menu">
          <StyledLi>
            <Link to="/">Home</Link>
          </StyledLi>
          <StyledLi>
            <Link to="/profile?cur=1">Change Address</Link>
          </StyledLi>
          <StyledLi>
            <Link to="/request">Request Pickup</Link>
          </StyledLi>
          <StyledLi>
            <Link to="/membership">Find a price</Link>
          </StyledLi>
          <StyledLi>
            <Link to="/contact">Customer Support</Link>
          </StyledLi>
          <StyledLi>
            <Link to="/updates">Updates</Link>
          </StyledLi>
          <StyledLi className="desktop--hide">
            <Link to="/account">My Account</Link>
          </StyledLi>
          <StyledLi className="desktop--hide">
            <Link to="/logout">Log Out</Link>
          </StyledLi>
        </StyledUl>
      </NavWrapDiv>
	);
}