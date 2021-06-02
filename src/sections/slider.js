import React from 'react';
import styled from 'styled-components';
import { Config } from '../config/config';
import { HomeSupport } from '../components';

const HeaderImage = styled.div`
	width: 100%;
    position: relative;
    overflow: hidden;
    img {
        width: 100%;
        height: auto;
    }

    @media only screen and (max-width: 800px) {
        img {
            width: auto;
            height: 340px;
            margin-left: -100px;
        }
	}
`;

const SupportWrap = styled.div`
    width: 100%;
    background: #EEEEEE;
    text-align: right;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const HomeSuportWrap = styled.div`
    text-align: center;

    @media only screen and (max-width: 1280px) {
		width: 100%;
        margin-top: 20px;
	}
`;

const SearchWrap = styled.div`
    width: 35%;
    margin: 0 auto;
    display: inline-block;
    text-align: center;
    h4 {
        color: #2d2a5f;
        font-size: 1.6rem;
        margin-bottom: 10px;
    }
    .search--txt {
        min-width: 350px;
        padding: 10px 45px 10px 20px;
        text-align: center;
        border: 1px solid #CCC;
        color: #333;
        font-size: 1rem;
        border-radius: 2px;
        &:before {
            content: "\f002";
        }
        &:focus, &:active {
            border: 1px solid #CCC;
            outline: unset;
        }
    }
    @media only screen and (max-width: 1280px) {
        margin-top: 20px;
        width: 100%;
    }

    @media only screen and (max-width: 500px) {
        .search--txt {
            min-width: 300px;
        }
    }
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

    @media only screen and (max-width: 800px) {
        width: 70%;
        h2 {
            font-size: 2rem;
        }
        p {
            font-size: 1rem;
            line-height: 1.8rem;
        }
    }
    @media only screen and (max-width: 500px) {
        width: 80%;
        h2 {
            font-size: 1.6rem;
        }
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
    @media only screen and (max-width: 800px) {
        padding: 18px 25px;
    }
    @media only screen and (max-width: 500px) {
        padding: 10px 0 10px 10px;
    }
`;
 
export const HomeSlider = () => (<>
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
        <SearchWrap>
            <h4>Search or Track Packages</h4>
            <input type="text" id="search" className="search--txt" placeholder="Enter Tracking Number(s)" />
        </SearchWrap>
        <HomeSuportWrap>
            <HomeSupport img={Config["home"]["support_img1"]} alt=""
                btntxt={Config["home"]["support_btn1"]}
                btnlink={Config["home"]["support_btnlink1"]}>{Config["home"]["support_text1"]}</HomeSupport>

            <HomeSupport img={Config["home"]["support_img2"]} alt=""
                btntxt={Config["home"]["support_btn2"]}
                btnlink={Config["home"]["support_btnlink2"]}>{Config["home"]["support_text2"]}</HomeSupport>

            <HomeSupport img={Config["home"]["support_img3"]} alt=""
                btntxt={Config["home"]["support_btn3"]}
                btnlink={Config["home"]["support_btnlink3"]}>{Config["home"]["support_text3"]}</HomeSupport>
        </HomeSuportWrap>
    </SupportWrap>
</>);