import { Loader } from "components/Loader";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getTrendingWeek } from "services/api";
import { SuperLink } from "./TrendingWeekList.styled";
import { Title } from "./TrendingWeekList.styled";
import { TrendingWeekItem } from "./TrendingWeekList.styled";


export const TrendingWeekList = () => {
    const [trendingMovie, setTrendingMovie] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const location = useLocation();
    

    useEffect(() => {
        async function fetchItems() {
            setLoading(true)
            try {
                const trendingMovie = await getTrendingWeek();
                setTrendingMovie(trendingMovie)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        
        fetchItems()
    }, [])

    return (<>
        <Title>Trending today</Title>
        {loading && <Loader />}
        {!error && <ul>
            {
                trendingMovie.map(({id, title}) => (
                    <TrendingWeekItem key={id}>
                        <SuperLink to={`/movies/${id}`} state={{from: location}}>
                            {title}
                       </SuperLink>
                    </TrendingWeekItem>
                ))  
            }
        </ul>}
        </>
    )
}