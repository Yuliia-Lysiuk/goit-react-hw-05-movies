import {  Outlet } from "react-router-dom";
import { SuperLink } from "./MovieDetailsPage.styled";
import { Title } from "./MovieDetailsPage.styled";
import { CardInfo, Card } from "./MovieDetailsPage.styled";
import PropTypes from 'prop-types';

export const MovieDetailsPage = ({ movie }) => {
     const { title, poster_path, vote_average, overview, genres} = movie;
    return <>
        
    <Card>
        <img src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt="" />
        <CardInfo>
            <h2>{title}</h2>
            <p>User Score: {vote_average*10}%</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <p>{ genres.map(genre=> genre.name).join(', ')}</p>
        </CardInfo>
        </Card>
        <div>
            <Title>Additional information</Title>
            <ul>
                <li>
                    <SuperLink to={`cast`}>
                        Cast
                    </SuperLink>
                </li>
                <li>
                    <SuperLink to={`reviews`}>
                        Reviews
                    </SuperLink>
                </li>
            </ul>
        </div>
        <Outlet />
    </>
}

MovieDetailsPage.propTypes = {
  movie: PropTypes.object,
};