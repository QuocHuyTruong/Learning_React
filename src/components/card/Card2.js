import React from "react";
import styled, { css } from "styled-components";
/**
 * const StyledCart = styled.tag(h1,h2,div,span,trong,a,p,section,...)``
 * CSS in JS
 */

const StyledCard = styled.div`
  position: relative;
  .card-image {
    height: 400px;
    width: 100%;
    border-radius: 8px;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
    }
  }
  .card-content {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 50%);
    background-color: white;
    bottom: 0;
    z-index: 10;
    border-radius: 20px;
    padding: 20px;
    width: calc(100% - 36px);
  }
  .card-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }
  .card-user {
    display: flex;
    align-items: center;
    column-gap: 12px;
  }
  .user-avatar {
    width: 30px;
    height: 30px;
    border-radius: 100rem;
    object-fit: cover;
    flex-shrink: 0;
  }
  .user-name {
    font-weight: 300;
    font-size: 16px;
    color: ${(props) => props.theme.orange};
  }
  .card-mete {
    display: flex;
    align-items: center;
    column-gap: 12px;
  }
  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .card-title {
    font-size: 18px;
    font-weight: 500;
    color: black;
  }
  .card-amount {
    font-size: 18px;
    font-weight: bold;
    background: linear-gradient(
      86.88deg,
      #7d6aff 1.38%,
      #fe886c 64.35%,
      #fc2872 119.91%
    );
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    ${(props) =>
      props.secondary &&
      css`
        background: linear-gradient(86.88deg, #20e3b2, #2cccff);
      `};
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
`;

// const StyledCard = styled.div`
//   position: relative;
//   width: auto;
// `;

const Card2 = (props) => {
  return (
    <StyledCard secondary={props.secondary}>
      <div className="card-image">
        <img
          src="https://cdn.dribbble.com/users/902228/screenshots/14975955/media/480251610a7cbda05dfb61c0f08e1e1b.jpg"
          alt=""
        />
      </div>
      <div className="card-content">
        <div className="card-top">
          <div className="card-user">
            <img
              className="user-avatar"
              src="https://cdn.dribbble.com/users/902228/screenshots/14975955/media/480251610a7cbda05dfb61c0f08e1e1b.jpg"
              alt=""
            />
            <span className="user-name">@zndrson</span>
          </div>
          <div className="card-mete">
            <img src="/coolicon.png" alt="heart" />
            <span>256</span>
          </div>
        </div>
        <div className="card-footer">
          <h3 className="card-title">Cosmic Perspective</h3>
          <span className="card-amount">12,000 PSL</span>
        </div>
      </div>
    </StyledCard>
  );
};

export default Card2;
