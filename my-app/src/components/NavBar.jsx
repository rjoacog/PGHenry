import React from 'react';
import {
    Heading,
    Spacer,
    Button,
    Box,
    Flex,
    Input
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

export default function NavBar() {
    return (
        <div>
            <Flex backgroundColor={"gray.100"} >
                <Box p='4'>
                    <Link to="/">
                        <Heading size='md'>logo de la app</Heading>
                    </Link>
                </Box>
                <Spacer />
                <Box p="4">
               <SearchBar />
                </Box>
                <Box p="4">
                    <Link to="/register">
                        <Button colorScheme='teal' mr='4'>
                            Sign Up
                        </Button>
                    </Link>
                    <Link to="/login">
                        <Button colorScheme='teal'>Log in</Button>
                    </Link>
                </Box>
            </Flex>
        </div>
    )
}
