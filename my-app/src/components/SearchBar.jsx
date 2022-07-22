import React, { useState } from 'react';
import { Input,IconButton, InputGroup, InputRightElement, useToast } from '@chakra-ui/react';
import { SearchIcon, } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { getProductByName } from "../actions/creates"

export default function SearchBar() {
    const dispatch = useDispatch();
    const [input, setInput] = useState("");
    const toast = useToast();

    function handleChange(e) {
        e.preventDefault();
        setInput(e.target.value);
    }

    function handleClic(e) {
        if(input !== "") {
            dispatch(getProductByName(input));
        }
        else {
            toast({
                title: "No puede estar vacío!",
                status: "error",
                duration: 4000,
                isClosable: true,
            });
        }
    }

    return (
        <div>
            <InputGroup size='md'>
                <Input type='text' width='auto' mr="4" fontFamily={'sans-serif'} borderColor={"goldenrod"} border="2px" placeholder='Buscar...' onChange={handleChange} />
                <InputRightElement width='0rem'>
                    <IconButton aria-label='Search database' fontFamily={'sans-serif'} ml="-70" width='5' mr="4" h="7" mb="1" icon={<SearchIcon />} onClick={handleClic}/>
                </InputRightElement>
            </InputGroup>
        </div>

    )
}