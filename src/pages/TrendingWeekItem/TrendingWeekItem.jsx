import { Loader } from "components/Loader";
import { MovieDetailsPage } from "pages/MovieDetailsPage/MovieDetailsPage";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom"
import { getMovieById } from "services/api";
import { MdArrowBack } from 'react-icons/md';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from "./TrendingWeekItem.styled";

const TrendingWeekItem = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const location = useLocation();

    useEffect(() => {
       async function fetchItems() {
            setLoading(true)
           try {
               const movie = await getMovieById(movieId);
                setMovie(movie)
            } catch (error) {
               setError(error)
               toast.error(`We don't have any movie`, {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                   progress: undefined,
                   theme: 'colored',
                });
            } finally {
               setLoading(false)
              
            }
        }
        
        fetchItems()
    }, [])
    
    return (<main>
        <Button to={location?.state?.from ?? `/`}><MdArrowBack/>Back</Button>
        {loading && <Loader />}
        {movie && <MovieDetailsPage movie={movie} />}
        <ToastContainer/>
        {error && <p>Not found</p>}
    </main>)
}
export default TrendingWeekItem