import React from "react";
import styled from "styled-components";
import HeroImg from "../assets/hero-img.webp";
import { MdArrowOutward } from "react-icons/md";

export default function Home() {
  return (
    <StyledHome>
      <div className="main_home_container">
        <div className="left_section">
            <h6>Strong Foundations for Tomorrow’s Landmarks</h6>
            <p>With a commitment to delivering high-quality solutions, our construction and consultancy services are tailored to meet your needs and exceed expectations.</p>
            <div className="hero_btns">
            <button>Learn More</button>
            <h5>Exporle Projects <MdArrowOutward /></h5>
            </div>
            
        </div>

        <div className="right_section">
          <img src={HeroImg} alt="" />
        </div>
      </div>
    </StyledHome>
  );
}

const StyledHome = styled.div`
height: 100vh;
background-color: var(--secondary-color);
  .main_home_container {
    display: flex;
    justify-content: center;
    align-items: center;
   
    .left_section {
      flex-basis: 60%;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      gap: 2rem;
      padding-left: 2%;
      p{
        max-width: 60ch;
        font-weight: 500;
        line-height: 1.4rem;
      }

      .hero_btns{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        h5{
            cursor: pointer;
        }
      }
      
    }
    .right_section {
      flex-basis: 40%;
      img {
        width: 100%;
        height: 100vh;
        object-fit: cover;
      }
    }
  }

  @media (max-width: 750px) {
    .main_home_container{
        flex-direction: column;
        gap: 2rem;
        .left_section{
            flex-basis: 100%;
            align-items: center;
        }
        .right_section{
            flex-basis: 100%;
        }
    }
  }
`;
