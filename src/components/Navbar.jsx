import React from "react";
import styled from "styled-components";
import Logo from "../assets/logo.webp";
import { MdArrowOutward } from "react-icons/md";

export default function Navbar() {
  return (
    <StyledNavbar>
      <div className="main_navbar">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>

        <div className="nav_metdata">
          <div className="nav_links">
            <a href="">About</a>
            <a href="">Service</a>
            <a href="">Projects</a>
            <a href="">Shop</a>
            <a href="">Blog</a>
          </div>
          <div className="talk-btn">
            <button>Let's Talk <MdArrowOutward /></button>
          </div>
        </div>
      </div>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.div`
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  .main_navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: auto;
    .logo {
      img {
        max-width: 200px;
        height: auto;
      }
    }
    .nav_metdata {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      .nav_links {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        a {
          font-size: var(--s-heading);
          text-decoration: none;
          color: black;
          font-weight: 500;
        }
      }
    }
  }
`;
