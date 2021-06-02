import React from 'react';
import styled from 'styled-components';
import { Config } from '../config/config';
import { PickBlock } from '../components';

const MissonSection = styled.section`
  width: 100%;
  text-align: center;
  padding: 30px 0;
  margin-top: 30px;
  background: #F0F0F0;
  p {
    width: 60%;
    margin: 0 auto;
    font-size: 1rem;
    color: #333;
    line-height: 1.2rem;
    font-weight: bold;
    text-align: left;
  }

  @media only screen and (max-width: 1080px) {
		p {
      width: 80%;
    }
	}
`;

const UpdateSection = styled.section`
  width: 100%;
  text-align: center;
  padding: 30px 0;
  background: #FFF;
  p {
    width: 60%;
    margin: 0 auto;
    font-size: 1rem;
    color: #333;
    line-height: 1.2rem;
    font-weight: bold;
    text-align: left;
  }

  @media only screen and (max-width: 1080px) {
		p {
      width: 80%;
    }
	}
`;

const TitleSection = styled.section`
  width: 100%;
  text-align: center;
  padding-top: 160px;
  background: url('/assets/images/flower.jpg') repeat-x left top;
`;
const TitleDiv = styled.div`
  text-align: center;
  position: relative;
  display: flex;
  justify-content: center;
  h2 {
    padding-top: 94px;
    font-size: 2.5rem;
    color: white;
    position: relative;
    z-index: 20;
  }
  img {
    width: 100%;
    max-width: 800px;
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
`;

const BlockSection = styled.section`
  width: 90%;
  margin: 0 auto;
`;

export const Misson = () => (
  <MissonSection>
    <TitleH2>{Config["home"]["our_mission"]}</TitleH2>
    <p>{Config["home"]["our_mission_desc"]}</p>
  </MissonSection>
);

export const Update = () => (
  <UpdateSection>
    <TitleH2>{Config["home"]["pss_updates"]}</TitleH2>
    <p>{Config["home"]["pss_updates_desc"]}</p>
  </UpdateSection>
);

export const PageTitle = () => (
  <TitleSection>
    <TitleDiv>
      <img src={Config["home"]["page_title_bg"]} alt="" />
    </TitleDiv>
  </TitleSection>
);

export const HomeArticles = () => (<>
    <BlockSection>
      <PickBlock title={Config["home"]["article1_title"]}
        img={Config["home"]["article1_img"]}
        type={true}>{Config["home"]["article1_desc"]}</PickBlock>

    <PickBlock title={Config["home"]["article2_title"]}
        img={Config["home"]["article2_img"]}
        type={false}>{Config["home"]["article2_desc"]}</PickBlock>

    <PickBlock title={Config["home"]["article3_title"]}
        img={Config["home"]["article3_img"]}
        type={true}>{Config["home"]["article3_desc"]}</PickBlock>
    </BlockSection>
</>);