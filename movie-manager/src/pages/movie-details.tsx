import { useState, useEffect } from 'react';
import '../styles/movie-details.css'
import { Badge, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {

    const { id } = useParams();
    const [movie, setMovie] = useState<any>();

    const fetchDetails = async () => {
        try {
            await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4cc883fd8d57d53c7c9794ebcea5d106&language=en-US&append_to_response=credits`)
                .then(response => response.json())
                .then(data => setMovie(data))
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message)
            }
        }
    };


    useEffect(() => {
        fetchDetails();
    }, []);



    return (
        <main>
            <Container fluid="md">
                <Row className="movie__topElement">
                    <div className="movie__cover">
                        <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${movie && movie?.backdrop_path}`} />
                    </div>
                </Row>

                <Row className="movie__bottomElement">
                    <Col lg={4} md={4} sm={6} className="d-flex justify-content-md-center movie_posterBox">
                        <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${movie && movie?.poster_path}`} />
                    </Col>

                    <Col lg={8} md={8} sm={6} className="d-flex justify-content-md-center">
                        <Container>
                            <Row className="d-flex justify-content-md-center movie_basics">
                                <div className="movie__basicsWrapper">
                                    <div className="movie__name">{movie?.title}</div>
                                    {movie?.tagline !== "" && <div className="movie__tagline">{movie?.tagline}</div>}
                                    <div className="movie__rating">
                                        {movie?.vote_average.toFixed(1)} <i className="fas fa-star" />
                                        <span className="movie__voteCount">{"(" + movie?.vote_count + ") votes"}</span>
                                    </div>
                                    <div className="movie__runtime">{movie?.runtime + " mins"}</div>
                                    <div className="movie__releaseDate">{"Release date: " + movie?.release_date}</div>
                                </div>
                            </Row>

                            <Row className="d-flex justify-content-md-center movie_details my-4">
                                <div className="movie__detailsWrapper">
                                    <div className="movie__genres">
                                        {
                                            movie?.genres
                                                ?
                                                (movie?.genres as [id: any, name: any]).map((genre) => (
                                                    <Badge key={genre.id} bg="info me-2" text="dark">{genre.name}</Badge>
                                                ))
                                                :
                                                ""
                                        }
                                    </div>

                                    <div className="synopsisText">Overview</div>
                                    <div className="summary">{movie?.overview}</div>

                                    <div className="actors">Starring:</div>
                                    <div className="movie__actors">
                                        {
                                            movie && movie['credits']['cast']
                                                ?
                                                (movie['credits']['cast'] as [id: any, name: any]).slice(0, 4).map((actor) => (
                                                    <Badge key={actor.id} bg="warning me-2" text="dark">{actor.name}</Badge>
                                                ))
                                                :
                                                ""
                                        }
                                    </div>


                                </div>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>

        </main>

    )
}

export default MovieDetails;

/**<div className="movie__name">{movie?.title}</div>
                        {movie?.tagline !== "" && <div className="movie__tagline">{movie?.tagline}</div>}
                        <div className="movie__rating">
                            {movie?.vote_average.toFixed(2)} <i className="fas fa-star" />
                            <span className="movie__voteCount">{"(" + movie?.vote_count + ") votes"}</span>
                        </div>
                        <div className="movie__runtime">{movie?.runtime + " mins"}</div>
                        <div className="movie__releaseDate">{"Release date: " + movie?.release_date}</div> 
                        
                        <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${movie && movie?.poster_path}`} alt={movie?.title} />*/