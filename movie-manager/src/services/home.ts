import axios from "axios";

const getForHomePage = () => {

    return axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=4cc883fd8d57d53c7c9794ebcea5d106")
        .then (response => response.data);
}

export default getForHomePage;