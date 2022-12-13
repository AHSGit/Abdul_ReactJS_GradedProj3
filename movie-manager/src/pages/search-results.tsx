import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import AddFavouritesButton from "../components/favorites-button";
import SearchBar from "../components/search-bar";

const SearchResultsPage = () => {

    const [searchResults, setsearchResults] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const fetchAll = async (searchValue: string) => {
        try {
            const data = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=4cc883fd8d57d53c7c9794ebcea5d106&query=${searchValue}`)
                .then(response => response.data);                

            if (data) {
                setsearchResults(data.results)
            }

        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message)
            }
        }
    }

    useEffect(() => {
        fetchAll(searchValue);
    }, [searchValue]);

return ( <Container>
            <br />
            <h2>Search For Any Movie</h2>
            <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
            <hr />
            { 
                <Row xs={1} md={2} lg={4}>
                    {
                        searchResults?.map((movie) => (
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
            }
        </Container>

    )
}

export default SearchResultsPage;