import React from "react";
import {
  Heading,
  Spacer,
  Button,
  Box,
  Flex,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  Menu,
  MenuButton,
  HStack,
  VStack,
  Avatar,
} from "@chakra-ui/react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { useAuth0 } from "@auth0/auth0-react";

export default function NavBar() {
  const { isAuthenticated, logout, loginWithRedirect, user } = useAuth0();
  return (
    <div>
      <Flex backgroundColor={"gray.100"}>
        <Box p="4">
          <Link to="/">
            <Heading size="md">logo de la app</Heading>
          </Link>
        </Box>
        <Spacer />
        <Box p="4">
          <SearchBar />
        </Box>
        <Link to="/shoppingcart">
        <Box p="4" mt="2" mr="1" ml="1">
        <ShoppingCartIcon  />
        </Box>
        </Link>  
        <Box p="4">
          {isAuthenticated ? (
            <>
              <Flex alignItems={"center"}>
                <Menu>
                  <MenuButton
                    py={2}
                    transition="all 0.3s"
                    _focus={{ boxShadow: "none" }}
                  >
                    <HStack>
                      <Avatar size={"sm"} src={user.picture} />
                      <VStack
                        display={{ base: "none", md: "flex" }}
                        alignItems="flex-start"
                        spacing="1px"
                        ml="2"
                      >
                        <Text fontSize="sm">{user.name}</Text>
                      </VStack>
                    </HStack>
                  </MenuButton>
                  <MenuList bg={"white"} borderColor={"gray.200"}>
                    <Link to="/register">
                      <MenuItem>Perfil</MenuItem>
                    </Link>
                    <Link to="/favourites">
                      <MenuItem>Favoritos</MenuItem>
                    </Link>
                    <MenuDivider />
                    <MenuItem
                      onClick={() =>
                        logout({ returnTo: window.location.origin })
                      }
                    >
                      Cerrar sesión
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
            </>
          ) : (
            <>
              <Button
                colorScheme="teal"
                mr="4"
                onClick={() =>
                  loginWithRedirect({
                    screen_hint: "signup",
                  })
                }
              >
                Sign Up
              </Button>
              <Button colorScheme="teal" onClick={() => loginWithRedirect()}>
                Log in
              </Button>

            </>
          )}
        </Box>
      </Flex>
    </div>
  );
}
