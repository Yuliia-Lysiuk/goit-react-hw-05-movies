import { ListMoviesPage } from "pages/ListMoviesPage/ListMoviesPage";
import { useEffect, useState } from "react";
import {  useSearchParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { getSearchMovie } from "services/api";
import { Label, Button, Search, Box} from "./MoviesPage.styled";

 export const MoviesPage = () => {
    const [value, setValue] = useState('');
    const [searchMovies, setSearchMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const querys = searchParams.get('query');

     const toasterParams = () => {
         return  {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                   progress: undefined,
                   theme: 'colored',
                }
     }
     
    const SubmitForm =  (e) => {
        e.preventDefault();
        setSearchMovies([])
        if (value === '') { return toast.warn(` Search the movie`, toasterParams());}
        setSearchParams({ query: value});
    }
    
    const searchValue = async () => {
        try {
            const searchMovie = await getSearchMovie(querys);
            setValue('');

            if ( searchMovie.length === 0) {
                setSearchMovies(null)
                return toast.error(`We don't have any movie`, toasterParams());
            };
            setSearchMovies(searchMovie); 
        } catch (error) {   }
         }

     
    useEffect(() => {
        if (querys){
        searchValue();
        }
    },[querys])
    
    return (<>
        <form onSubmit={SubmitForm}>
            <Box>  
                <Search type="text" value={value} onChange={(e) => { setValue(e.target.value) }} placeholder=' '/>
                <Label >Movie</Label>
                <Button type="submit">Search</Button>
            </Box>  
        </form>
        <ToastContainer/>
        {searchMovies && <ListMoviesPage searchMovies={searchMovies} />}
        </>
    )
}

