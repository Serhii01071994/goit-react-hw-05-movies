import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const StyledAppContainer = styled.div`
  .container {
    margin: 20px;
  }

  .home-list {
    display: flex;
    margin-left: auto;
    margin-right: auto;
  }

  .header {
    font-size: 25px;
    margin: 20px;
    border-bottom: 1px solid black;
  }

  .moviesList {
    display: grid;
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(300px, 300px));
    grid-gap: 16px;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
  }

  .movie-item {
    border-radius: 2px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  }

  .title {
    font-size: 18px;
    font-weight: 600;
    margin: 10px 0;
    color: rgba(0, 0, 0);
  }

  .form {
    margin: 20px;
  }

  .input {
    width: 300px;
    font-size: 20px;
  }

  .button {
    font-size: 20px;
  }

  .movie-deteils {
    display: flex;
    gap: 15px;
    border-bottom: 1px solid black;
  }

  .details {
    width: 600px;
  }

  .poster {
    margin-bottom: 20px;
  }

  .under-title {
    font-size: 16px;
    font-weight: 500;
    margin: 10px 0;
    color: rgba(0, 0, 0);
  }

  .text {
    font-size: 13px;
    font-weight: 400;
    margin: 10px 0;
    color: rgba(0, 0, 0);
  }

  .actor-card {
    margin: 10px;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-left: auto;
    margin-right: auto;
  }

  .actor {
    border: 1px solid rgba(1, 1, 1);
    border-radius:10px;
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: black;
  border: 2px solid orange;
  border-radius: 10px;
  display: inline-block;
  padding: 10px;
  font-size: 22px;
  text-decoration: none;
  margin-right: 15px;
  margin-bottom: 20px;

  transition: all 0.3s;

  &.active {
    border: 1px solid white;
    background-color: black;
    color: white;
  }

`;

export const StyledLink = styled(Link)`
  .go-back {
    color: black;
    border: 2px solid orange;
    border-radius: 10px;
    display: inline-block;
    padding: 8px;
    font-size: 15px;
    text-decoration: none;
    margin-right: 15px;
    margin-bottom: 20px;
  }
`;

export const StyledLinkInform = styled(Link)`
  .inform {
    margin-top: 20px;
  }
`;