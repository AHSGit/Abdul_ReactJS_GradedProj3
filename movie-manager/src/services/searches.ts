import axios from "axios";

type SearchProps = {
    query: string
}

const getSearchResults = ( query : SearchProps ) => {

    return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=4cc883fd8d57d53c7c9794ebcea5d106&query=${query}`)
        .then (response => response.data);
}

export default getSearchResults;