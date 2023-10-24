// import Home from "pages/Home"
// import Movies from "pages/Movies";
// import MovieDetails from "pages/MovieDetails";
import { Route, Routes } from "react-router-dom"

import { StyledAppContainer, StyledNavLink } from './App.styled';
import { Suspense, lazy } from "react";
import Loader from "components/Loader/Loader";

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));

export const App = () => {
  return (
    <StyledAppContainer>
      <header className="header">
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/movies">Movies</StyledNavLink>
      </header>
      <Suspense fallback={<Loader/>}> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />} />
        </Routes>
      </Suspense>
    </StyledAppContainer>
  );
} 