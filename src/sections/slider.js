import React from 'react';
import styled from 'styled-components';
import { Page } from '../components/common';
import { Config } from '../config/config';
import { HomeSupport } from '../components';

const HeaderImage = styled.div`
	width: 100%;
    position: relative;
    img {
        width: 100%;
        height: auto;
    }
`;

const SupportWrap = styled.div`
    width: 100%;
    background: #EEEEEE;
    text-align: right;
`;

const BannerTextDiv = styled.div`
    position: absolute;
    width: 48%;
    height: 250px;
    background: #11479f;
    left: 0;
    top: 40px;
    &:after {
        content: '';
        position: absolute;
        right: -60px;
        top: 0;
        width: 0;
        height: 0;
        border-top: 250px solid #11479f; 
        border-right: 60px solid transparent; 
    }
    h2 {
        color: #FEFEFE;
        font-size: 2.4rem;
        font-weight: bold;
        margin-bottom: 16px;
    }
    p {
        color: #FEFEFE;
        font-size: 1.1rem;
        line-height: 2rem;
        font-weight: bold;
        margin-bottom: 1rem;
    }
`;

const BannerTextWrap = styled.div`
    padding: 30px 50px;
    .shop_btn {
        margin-top: 30px;
        a {
            padding: 5px 30px;
            text-decoration: none;
            color: white;
            border: 1px solid #343367;
            border-radius: 3px; 
        }
    }
`;
 
export const HomeSlider = () => (
    <Page>
        <HeaderImage>
            <img src="/assets/images/banner.jpg" alt="Header Banner" />
            <BannerTextDiv><BannerTextWrap>
                <h2>{Config["home"]["tab_block_title"]}</h2>
                <p>{Config["home"]["tab_block_subtitle"]}</p>
                <div className="shop_btn">
                    <a href="#this" title="Shop Now">Shop Now</a>
                </div>
            </BannerTextWrap></BannerTextDiv>
        </HeaderImage>
        <SupportWrap>
            <HomeSupport img={Config["home"]["support_img1"]} alt=""
                btntxt={Config["home"]["support_btn1"]}
                btnlink={Config["home"]["support_btnlink1"]}>{Config["home"]["support_text1"]}</HomeSupport>

            <HomeSupport img={Config["home"]["support_img2"]} alt=""
                btntxt={Config["home"]["support_btn2"]}
                btnlink={Config["home"]["support_btnlink2"]}>{Config["home"]["support_text2"]}</HomeSupport>

            <HomeSupport img={Config["home"]["support_img3"]} alt=""
                btntxt={Config["home"]["support_btn3"]}
                btnlink={Config["home"]["support_btnlink3"]}>{Config["home"]["support_text3"]}</HomeSupport>
        </SupportWrap>
    </Page>
);