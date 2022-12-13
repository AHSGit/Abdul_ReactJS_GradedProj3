import axios from "axios";

const getTopIndian = () => {

    return axios.get("https://api.themoviedb.org/3/discover/movie?api_key=4cc883fd8d57d53c7c9794ebcea5d106&language=en-US&sort_by=popularity.desc&include_adult=true&page=1&vote_average.gte=8&with_original_language=hi%7Ckn%7Cml%7Cta%7Cte")
        .then (response => response.data);
}

export default getTopIndian;