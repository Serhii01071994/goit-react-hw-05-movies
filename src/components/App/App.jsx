import Home from "pages/Home"
import Movies from "pages/Movies";
import MovieDetails from "pages/MovieDetails";
import { Route, Routes } from "react-router-dom"

import { StyledAppContainer, StyledNavLink } from './App.styled';

export const App = () => {
  return (
    <StyledAppContainer>
      <header className="header">
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/movies">Movies</StyledNavLink>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
      </Routes>
    </StyledAppContainer>
  );
} 