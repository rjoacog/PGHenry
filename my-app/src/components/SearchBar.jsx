import React from 'react';
import { Button, Input } from '@chakra-ui/react';
import {SearchIcon} from "@chakra-ui/icons";

export default function SearchBar() {

    return (
        <div>
            <Input width='auto' mr="4" placeholder='Buscar...' />
            <Button ml="-70" width='5' mr="4" h="7">
            <SearchIcon  />
            </Button>
        </div>

    )
}
