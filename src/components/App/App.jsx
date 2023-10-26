// import Home from "pages/Home"
// import Movies from "pages/Movies";
// import MovieDetails from "pages/MovieDetails";
import { Route, Routes } from 'react-router-dom';

import { StyledAppContainer } from './App.styled';
import { Suspense, lazy } from 'react';
import Loader from 'components/Loader/Loader';
import { Header } from 'components/Header/Header';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));

export const App = () => {
  return (
    <StyledAppContainer>
      <Header/>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />} />
        </Routes>
      </Suspense>
    </StyledAppContainer>
  );
};
