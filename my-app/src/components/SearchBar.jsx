import React, { useState } from 'react';
import { Input,IconButton } from '@chakra-ui/react';
import { SearchIcon, } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { getProductByName } from "../actions/creates"

export default function SearchBar() {
    const dispatch = useDispatch()
    const [input, setInput] = useState("");

    function handleChange(e) {
        e.preventDefault();
        setInput(e.target.value);
    }

    function handleClic(e) {
        if(setInput !== "") {
            dispatch(getProductByName(input));
        }
        else {
            alert("El campo no puede estar vacío");
        }
    }

    return (
        <div>
            <Input type='text' width='auto' mr="4" borderColor={"gray.400"} border="2px" placeholder='Buscar...' onChange={handleChange} />
            <IconButton aria-label='Search database' ml="-70" width='5' mr="4" h="7" mb="1" icon={<SearchIcon />} onClick={handleClic}/>
        </div>

    )
}