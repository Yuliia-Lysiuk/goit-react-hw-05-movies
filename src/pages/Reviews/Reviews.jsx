import { Loader } from "components/Loader";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getReviews } from "services/api";

const Reviews = () => {
    const { movieId } = useParams();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [reviews, setReviews] = useState([]);

     useEffect(() => {
         async function fetchItems() {
             setLoading(true)
             try {
                 const ReviewsList = await getReviews(movieId);
                 setReviews(ReviewsList)
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
    {reviews.length > 0 && <>
        <ul>
            {reviews.map(({ author, id, content }) => (
                <li key={id}>
                     <h4>Author: {author}</h4>
                     <p>{ content}</p>
                </li>
            ))}
        </ul>
    </>}
    {reviews.length === 0 && <p>We don't have any reviews for this movie.</p>}
    </main>)
}

export default Reviews;