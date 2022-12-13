import React from 'react';
import './styles/app.css'
import NavigationMenu from './components/navigation-menu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import UpcomingPage from './pages/upcoming';
import InTheatersPage from './pages/in-theaters';
import TopIndianPage from './pages/top-indian';
import TopRatedPage from './pages/top-rated';
import SearchResultsPage from './pages/search-results';
import FavouritesPage from './pages/favourites';
import MovieDetails from './pages/movie-details';
import NotFound from './pages/404';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationMenu />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/movie/:id' element={<MovieDetails />} />
            <Route path='/movies/upcoming' element={<UpcomingPage />} />
            <Route path='/movies/in-theaters' element={<InTheatersPage />} />
            <Route path='/movies/top-rated' element={<TopRatedPage />} />
            <Route path='/movies/top-indian' element={<TopIndianPage />} />
            <Route path='/movies/search' element={<SearchResultsPage />} />
            <Route path='/movies/favourites' element={<FavouritesPage />} />
            <Route path='/*' element={<NotFound />} />        
          </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;
