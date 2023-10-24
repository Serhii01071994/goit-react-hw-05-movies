import { StyledLinkInform } from "components/App/App.styled";
import { Link } from "react-router-dom"

export const AdditionalInformation = ({ location }) => {
  
    return (
      <StyledLinkInform>
        <div className="inform">
          <Link
            to={'cast'}
            state={{ from: location.state?.from ?? '/' }}
            className="go-back"
          >
            Cast
          </Link>
          <Link
            to={'reviews'}
            state={{ from: location.state?.from ?? '/' }}
            className="go-back"
          >
            Reviews
          </Link>
        </div>
      </StyledLinkInform>
    );
}