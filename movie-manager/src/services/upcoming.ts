import axios from "axios";

const getAllUpcoming = () => {

    return axios.get("https://api.themoviedb.org/3/discover/movie?api_key=4cc883fd8d57d53c7c9794ebcea5d106&language=en-US&sort_by=popularity.desc&include_adult=true&page=1&primary_release_year=2023")
        .then (response => response.data);
}

export default getAllUpcoming;