import axios from "axios";

const getMovieDetails = (id: string) => {

    return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=4cc883fd8d57d53c7c9794ebcea5d106&language=en-US&append_to_response=credits`)
        .then (response => response.data);
}

export default getMovieDetails;