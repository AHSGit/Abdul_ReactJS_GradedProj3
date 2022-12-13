import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type FavProps = {
    movie: never
}

const AddFavouritesButton = ({ movie }: FavProps) => {

    const [favourites, setFavourites] = useState([]);

    const addFavourites = async (movie: never) => {

        //fetching favourites list to check existing data
        await fetch('http://localhost:4000/favourites')
            .then((result) => result.json())
            .then((data) => setFavourites(data))

        //adding to favourites if movie NOT already present there
        if (favourites.some((item: never) => item['id'] === movie['id'])) {
            toast.info("Already added to Favourites!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
                })
        }

        else {
            fetch('http://localhost:4000/favourites', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(movie)
                })

             toast.success("Added to Favourites!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
                })
        }

           
    }

    return (
        <>
            <div className="text-center">
                <Button
                    variant="warning my-2"
                    id="button-addon2"
                    style={{ alignContent: 'center' }}
                    onClick={() => addFavourites(movie)}
                > Add to Favourites&nbsp;<FontAwesomeIcon icon={faHeart} style={{color: 'crimson'}} />
                </Button>
                <ToastContainer newestOnTop />
            </div>
        </>
    )

}

export default AddFavouritesButton;
