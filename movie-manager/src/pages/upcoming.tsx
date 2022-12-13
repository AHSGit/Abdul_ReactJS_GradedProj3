import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Container, Toast, ToastContainer } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AddFavouritesButton from '../components/favorites-button';
import LoadingIndicator from '../components/loading-indicator';
import getAllUpcoming from '../services/upcoming';

const UpcomingPage = () => {

    const [upcoming, setUpcoming] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(
        () => {
            const fetchAll = async () => {
                try {
                    const data = await getAllUpcoming();
                    setUpcoming(data.results)
                } catch (error: any) {
                    alert(error.message);
                }
            };

            fetchAll();
        }, []);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, []);

    return <> { isLoading

        ? <LoadingIndicator />

            : <Container>
                <main>
                    <br />
                    <h1>Coming Soon</h1>
                    <hr />

                    <Row xs={1} md={2} lg={4}>
                        {
                            upcoming?.map((movie) => (
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
                                                    <AddFavouritesButton movie={movie} />
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

export default UpcomingPage;