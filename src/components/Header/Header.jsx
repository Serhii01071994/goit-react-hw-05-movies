import { StyledNavLink } from 'components/App/App.styled';
import { useLocation } from 'react-router-dom';

export const Header = () => {
    const { pathname } = useLocation();
  return (
    <header className="header">
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink
        to="/movies"
        className={pathname.includes('movies') && 'active'}
      >
        Movies
      </StyledNavLink>
    </header>
  );
};
