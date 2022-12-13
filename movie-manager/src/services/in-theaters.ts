import axios from "axios";

const getAllInTheaters = () => {

    return axios.get("https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2022-10-01&primary_release_date.lte=2022-12-01&api_key=4cc883fd8d57d53c7c9794ebcea5d106")
        .then (response => response.data);
}

export default getAllInTheaters;