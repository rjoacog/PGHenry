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
import { useSelector } from "react-redux";
import SearchBar from "../components/SearchBar";
import { useAuth0 } from "@auth0/auth0-react";
import sneakers from "../img/sneakers.png";

export default function NavBar() {
  const { isAuthenticated, logout, loginWithRedirect, user } = useAuth0();
  const carry = useSelector((state => state.cart)) 
  const a = [];
  {
    carry.map(c => {
      for(let i = 0; i < c.quantity; i++)
        a.push(c)
      })
  }
  const item = a.length; 
  return (
    <div>
      <Flex backgroundColor={"black"}>
        <Box p="1"  ml={10}>
          <Link to="/">
            <img src={ sneakers } display="flex" width={40} />
            <Heading size="sm" mt={3} color={"goldenrod"}>Henry Shoes</Heading>
          </Link>
        </Box>
        <Spacer />
        <Box p="4" color={"goldenrod"}>
          <SearchBar />
        </Box>
        <Link to="/shoppingcart">
        <Box p="4" mt="2" mr="1" ml="1" color={"goldenrod"}>
        <ShoppingCartIcon  />
        {item? item : null}
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
                  <MenuList bg={"black"} borderColor={"goldenrod"}>
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
                backgroundColor="goldenrod"
                mr="4"
                onClick={() =>
                  loginWithRedirect({
                    screen_hint: "signup",
                  })
                }
              >
                Sign Up
              </Button>
              <Button colorScheme="teal" backgroundColor={"goldenrod"} onClick={() => loginWithRedirect()}>
                Log in
              </Button>

            </>
          )}
        </Box>
      </Flex>
    </div>
  );
}
