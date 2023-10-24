import { Link } from "react-router-dom"

export const AdditionalInformation = () => {
    return (
      <div>
        <Link to={'cast'}>
          Cast
        </Link>
        <Link>Reviews</Link>
      </div>
    );
}