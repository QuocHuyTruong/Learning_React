import React from "react";
import styled, { css } from "styled-components";
/**
 * const StyledCart = styled.tag(h1,h2,div,span,trong,a,p,section,...)``
 * CSS in JS
 */

const StyledCard = styled.div`
  position: relative;
  width: auto;
`;
const CardImage = styled.div`
  height: 400px;
  width: 100%;
  border-radius: 8px;
`;
const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;
const CardContent = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 50%);
  background-color: white;
  bottom: 0;
  z-index: 10;
  border-radius: 20px;
  padding: 20px;
  width: calc(100% - 36px);
`;
const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;
const CardUser = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;
const UserAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100rem;
  object-fit: cover;
  flex-shrink: 0;
`;
const UserName = styled.span`
  font-weight: 300;
  font-size: 16px;
  color: #333;
`;
const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: black;
`;
const CardAmount = styled.span`
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
`;
const CardMete = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;
const Card = (props) => {
  return (
    <StyledCard>
      <CardImage>
        <CardImg
          src="https://cdn.dribbble.com/users/902228/screenshots/14975955/media/480251610a7cbda05dfb61c0f08e1e1b.jpg"
          alt=""
        />
      </CardImage>
      <CardContent>
        <CardTop>
          <CardUser>
            <UserAvatar
              src="https://cdn.dribbble.com/users/902228/screenshots/14975955/media/480251610a7cbda05dfb61c0f08e1e1b.jpg"
              alt=""
            />
            <UserName>@zndrson</UserName>
          </CardUser>
          <CardMete>
            <img src="/coolicon.png" alt="heart" />
            <span>256</span>
          </CardMete>
        </CardTop>
        <CardFooter>
          <CardTitle>Cosmic Perspective</CardTitle>
          <CardAmount secondary={props.secondary}>12,000 PSL</CardAmount>
        </CardFooter>
      </CardContent>
    </StyledCard>
  );
};

export default Card;
