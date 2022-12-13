import { useState, useEffect, ChangeEvent, Dispatch } from "react";
import { Form } from "react-bootstrap";
import SearchResultsPage from "../pages/search-results";

type SearchProps = {
    searchValue: string
    setSearchValue: Dispatch<React.SetStateAction<string>>
}

const SearchBar = ( { searchValue, setSearchValue } : SearchProps ) => {

    return (
        <Form>
            <Form.Group className="mb-3 search-box" controlId="exampleForm.ControlInput1">
                <Form.Control
                    type="text"
                    placeholder="Search for movies..."
                    value = {searchValue}
                    onChange={(e) => {
                        setSearchValue(e.currentTarget.value)
                    }}
                />
            </Form.Group>
        </Form>
    )

}

export default SearchBar;