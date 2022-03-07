import React from 'react';
import { Input,IconButton } from '@chakra-ui/react';
import {SearchIcon, } from "@chakra-ui/icons";

export default function SearchBar() {

    return (
        <div>
            <Input width='auto' mr="4" borderColor={"gray.400"} border="2px" placeholder='Buscar...' />
            <IconButton aria-label='Search database' ml="-70" width='5' mr="4" h="7" mb="1" icon={<SearchIcon />} />
        </div>

    )
}
