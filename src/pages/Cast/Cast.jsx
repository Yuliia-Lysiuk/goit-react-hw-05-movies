import { Loader } from "components/Loader";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getCast } from "services/api";
import { CastItem } from "./Cast.styled";
import { CastList } from "./Cast.styled";

const Cast = () => {
    const { movieId } = useParams();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [cast, setCast] = useState([]);

     useEffect(() => {
         async function fetchItems() {
             setLoading(true)
             try {
                 const CastList = await getCast(movieId);
                 setCast(CastList)
             } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
         }
     fetchItems()
     }, [])

return (<main>
        {loading && <Loader />}
    {cast && <>
        <CastList>
            {cast.map(({ name, id, character, profile_path }) => (
                <CastItem key={id}>
                    <img src={profile_path? `https://image.tmdb.org/t/p/w342${profile_path}` : `https://via.placeholder.com/280x420.png?text=Image+Not+Available`} alt={name} width='100'/>
                    <p> {name}</p>
                    <p>Character : { character}</p>
                </CastItem>
            ))}
        </CastList>
    </>}
    {error && <p>Not found</p>}
    </main>)
}

export default Cast;