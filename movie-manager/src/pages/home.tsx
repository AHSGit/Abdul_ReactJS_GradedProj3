import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../styles/home.css'
import { Carousel } from 'react-responsive-carousel';
import getForHomePage from '../services/home';
import { Link } from 'react-router-dom';
import { Badge, Button, Container } from 'react-bootstrap';

const HomePage = () => {

    const [homedata, setHomepage] = useState([]);

    useEffect(
        () => {
            const fetchAll = async () => {
                try {
                    const data = await getForHomePage();
                    setHomepage(data.results)
                } catch (error: any) {
                    alert(error.message);
                }
            };

            fetchAll();
        }, []);


    return (

        <div className="carousel w-100">
            <Carousel
                showThumbs={false}
                autoPlay={true}
                transitionTime={2}
                infiniteLoop={true}
                showStatus={false}
            >

                {
                    homedata.map((movie) => (
                        <Link key={movie['id']} style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie['id']}`} >
                            <div className="carouselImage">
                                <img src={`https://image.tmdb.org/t/p/original${movie && movie['backdrop_path']}`} alt={movie['original_title']} />
                            </div>
                            <div className="carouselImage__overlay">
                                <div className="carouselImage__title">{movie ? movie['original_title'] : ""}</div>
                                <div className="carouselImage__runtime">
                                    {movie ? movie['release_date'] : " "}
                                    <span className="carouselImage__rating">
                                        {movie ? movie['vote_average'] : " "}&nbsp;
                                        <i className="fas fa-star" />{" "}
                                    </span><br />
                                </div>
                                <div className="carouselImage__description">{movie ? movie['overview'] : ""}</div>
                            </div>
                        </Link>
                    ))
                }

            </Carousel>

            <Container>
            <div className='my-5'>
                <h2>Welcome to Movies On The Tip (MOTT)</h2>
                <hr />
                <strong className="blockquote">Made with the help of TMBD</strong >&nbsp;&nbsp;&nbsp;<span className="text-center"><a href="https://www.themoviedb.org/about">
                    <Button variant="warning" className='my-1' style={{borderRadius: '20px', color: "black", fontWeight: '600'}}>
                        Visit <Badge bg="warning"><i className="fa-solid fa-arrow-up-right-from-square" style={{color: 'black'}} ></i></Badge>
                        <span className="visually-hidden">unread messages</span>
                    </Button>
                </a></span>

                <p className="lead">The Movie Database (TMDB) is a community built movie and TV database. Every piece of data has been added by our amazing community dating back to 2008. TMDB's strong international focus and breadth of data is largely unmatched and something we're incredibly proud of. Put simply, we live and breathe community and that's precisely what makes us different.</p>

                
            </div>
            </Container>
        </div>
    )

}

export default HomePage;