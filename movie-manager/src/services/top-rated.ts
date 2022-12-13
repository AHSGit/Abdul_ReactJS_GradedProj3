import axios from "axios";

const getTopRated = () => {

    return axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=4cc883fd8d57d53c7c9794ebcea5d106&language=en-US&page=1")
        .then (response => response.data);
}

export default getTopRated;