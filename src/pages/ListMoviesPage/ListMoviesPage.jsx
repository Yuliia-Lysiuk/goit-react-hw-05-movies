import { useLocation} from "react-router-dom";
import { SearchItem, SuperLink } from "./ListMoviesPage.styled";
import PropTypes from 'prop-types';

 export const ListMoviesPage = ({searchMovies}) => {

    const location = useLocation();
     
    return (<>
      <ul>
            {searchMovies.map(({id, title}) => (
            <SearchItem key={id}>
                <SuperLink to={`/movies/${id}`} state={{from: location}}>
                    {title}
                </SuperLink>
            </SearchItem>
            ))}
        </ul>
        </>
    )
}

ListMoviesPage.propTypes = {
  searchMovies: PropTypes.array,
};



