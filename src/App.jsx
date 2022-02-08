
import {Routes, Route, Navigate} from "react-router-dom";
import styled from "styled-components";
import { lazy, Suspense } from 'react';

const TrendingWeekItem = lazy(() => import("./pages/TrendingWeekItem/TrendingWeekItem"));
const Cast = lazy(() => import("./pages/Cast/Cast"));
const Reviews = lazy(() => import("./pages/Reviews/Reviews"));


const createChunk = (componentName, folder='components') => {
  return lazy(() =>
    import(`./${folder}/${componentName}/${componentName}`).then(module => ({
      default: module[componentName],
    }))
  );
};

const HomePage = createChunk('HomePage');
const MoviesPage = createChunk('MoviesPage');
const Navigation = createChunk('Navigation');

export const App = () => {
  return <Suspense fallback="">
  <Box>
     <Routes>
        <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path="movies/:movieId/" element={<TrendingWeekItem />} >
        <Route path="cast" element={< Cast/>} />
        <Route path="reviews" element={< Reviews/>}/>
         </Route>
        <Route path="movies" element={<MoviesPage />} />
        <Route path="*" element={<Navigate to='/' />} />
        </Route>
      </Routes>
    </Box>
    </Suspense>;
};

const Box = styled.div`
  margin: auto;
 padding:30px;
`