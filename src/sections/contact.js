import React from 'react';
import styled from 'styled-components';
import { Config } from '../config/config';
import { Page } from '../components/common';

const ContactBannerWrap = styled.section`
  background: #EEEEEE;
  width: 100%;
  &>div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (max-width: 800px) {
    &>div {
      display: block;
    }
  }
`;

const ContactContentWrap = styled.section`
  width: 100%;
  margin: 3rem auto;
  &>div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  a {
    color: #111;
    text-decoration: none;
  }

  @media only screen and (max-width: 800px) {
    &>div {
      display: block;
    }
  }
`;

const ContactBannerLeft = styled.div`
  width: 100%;
  text-align: left;
  p {
    width: 60%;
    margin: 0 auto;
    line-height: 1.5rem;
  }
  @media only screen and (max-width: 800px) {
    h2 {
      padding-top: 20px;
    }
    p {
      width: 94%;
      margin: 20px;
    }
  }
`;
const ContactBannerRight = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: auto;
  }
`;

const TitleH2 = styled.h2`
  font-family: 'Verdana';
  font-size: 30px;
  font-weight: bold;
  color: #003A96;
  text-align: center;
  margin-bottom: 15px;
  padding-right: 10%;
`;

const TitleH3 = styled.h3`
  font-family: 'Verdana';
  font-size: 29px;
  font-weight: bold;
  color: #2b60b5;
  text-align: center;
  margin-bottom: 15px;
  padding-right: 5%;
`;

export const ContactBanner = () => (<>
  <ContactBannerWrap>
    <Page>
      <ContactBannerLeft>
        <TitleH2>{Config["contact"]["contact_page_title"]}</TitleH2>
        <p>{Config["contact"]["contact_page_desc"]}</p>
      </ContactBannerLeft>
      <ContactBannerRight>
        <img src={Config["contact"]["contact_page_banner"]} alt="" />
      </ContactBannerRight>
    </Page>
  </ContactBannerWrap>
  <ContactContentWrap>
    <Page>
      <ContactBannerLeft>
        <TitleH3>Email Us</TitleH3>
        <p>Please email us at <a href="mailto:connorengelsberg@icloud.com">connorengelsberg@icloud.com</a>. It may take us a little longer to answer to your email but you will be answered.</p>
      </ContactBannerLeft>
      <ContactBannerLeft>
        <TitleH3>Call Us</TitleH3>
        <p>{Config["contact"]["call_us_content"]}</p>
      </ContactBannerLeft>
    </Page>
  </ContactContentWrap>
</>);