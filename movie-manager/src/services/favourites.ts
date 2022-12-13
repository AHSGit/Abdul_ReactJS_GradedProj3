import axios from "axios";

const postFavourites = async (newMovies: Object[]) => {

    const postItemsURL = "http://localhost:4000/favourites";

    const responseData = await axios.post<Object[]>(
        postItemsURL,
        newMovies,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );

    return responseData.data;
}

export default postFavourites;