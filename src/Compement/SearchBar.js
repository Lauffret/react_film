import React, { useState } from 'react';
import Api from './Api';
import '../App.css'
import { InputGroup, FormControl } from 'react-bootstrap'


const SearchBar = () => {
    const [title, setTitle] = useState("")

    if (title !== "") {
        return (
            <div>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">Recherche</InputGroup.Text>
                    <FormControl type="search" value={title} onChange={(e) => setTitle(e.target.value)}
                    />
                </InputGroup>
                <Api param={"&query=" + title + "&page=1&include_adults=false"} />
            </div>
        );
    } else {
        return (
            <div>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">Recherche</InputGroup.Text>
                    <FormControl type="text" value={title} onChange={(e) => setTitle(e.target.value)}
                    />
                </InputGroup><p>Rechercher un Film</p>
            </div>
        );
    }
};

export default SearchBar;