import React, { useEffect, useState } from 'react';
import { faHeartBroken } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoadingIndicator from '../components/loading-indicator';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FavouritesPage = () => {

    const [favourites, setFavourites] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [status, setStatus] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, []);

    useEffect(
        () => {
            const fetchAll = async () => {
                try {
                    await fetch('http://localhost:4000/favourites')
                        .then((result) => result.json())
                        .then((data) => setFavourites(data))
                } catch (error: any) {
                    alert(error.message);
                }
            };

            fetchAll();

        }, [status]);

    //removing from favourites 
    const removeFavourites = (movie: never) => {
        fetch(`http://localhost:4000/favourites/${movie['id']}`, {
            method: 'DELETE'
        })

        toast.error("Removed from favourites!" , {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
            });
    }


    return <> { isLoading

        ? <LoadingIndicator />

        : <Container>
            <main>
                <br />
                <h1>Your Favourites</h1>
                <hr />

                <Row xs={1} md={2} lg={4}>
                    {
                        favourites?.map((movie) => (
                            <Col key={movie['id']} className="d-flex align-items-stretch my-3">
                                <Col className="gap-3">
                                    <div className="card-wrapper">
                                        <Card style={{ width: '15rem' }}>
                                            <Link style={{ textDecoration: "none", color: '#1a1e22' }} to={`/movie/${movie['id']}`} >
                                                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original${movie && movie['poster_path']}`} alt={movie['original_title']} height="350px" style={{ objectFit: "fill" }} />
                                                <Card.Body style={{ background: '#282c34', color: 'aliceblue' }}>
                                                    <Card.Title className='movie_title' style={{ textAlign: 'center' }}>{`${movie['original_title']}`}</Card.Title>
                                                </Card.Body>
                                            </Link>
                                            <Card.Footer style={{ background: '#282c34', color: 'aliceblue' }}>
                                                <div className="text-center">
                                                    <Button
                                                        variant="warning my-2"
                                                        id="button-addon2"
                                                        style={{ alignContent: 'center' }}
                                                        onClick={() => {
                                                            removeFavourites(movie)
                                                            setStatus(!status)
                                                        }}
                                                    >
                                                        Remove&nbsp;
                                                        <FontAwesomeIcon icon={faHeartBroken} style={{ color: 'black' }} />
                                                    </Button>
                                                    <ToastContainer newestOnTop />
                                                </div>
                                            </Card.Footer>
                                        </Card>
                                    </div>
                                </Col>
                            </Col>
                        )
                        )
                    }
                </Row>
            </main>
        </Container>
    }

    </>

}

export default FavouritesPage;