import React, {useEffect, useState } from "react";
import { getWishlist, addWishlist, removeWishlist, saveWishlist } from "../actions/creates";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import {
  chakra,
  Flex,
  useColorModeValue,
  Button,
  Stack,
  Box,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

export default function Wishlist() {
  const data = [
    { name: "Tenis Nano X1", brand: "Reebok", color: ["yellow"], gender: "Women", stock: 15 },
    { name: "Tenis Nano X3", brand: "Reebok", color: ["yellow", "grey"], gender: "Women", stock: 15 },
    { name: "Tenis Flexagon Energy Train 3", brand: "Reebok", color: ["black", "white"], gender: "Women", stock: 15 },
    { name: "Tenis Princess", brand: "Reebok", color: ["white"], gender: "Women", stock: 15 },
  ];
  const dataColor = useColorModeValue("white", "gray.800");
  const bg = useColorModeValue("white", "gray.800");
  const bg2 = useColorModeValue("gray.100", "gray.700");

  const dispatch = useDispatch();
  const list = useSelector((state) => state.wishlist);
  const { user } = useAuth0();
  const email = {email: "leo@gmail.com"};// si funciona deberia ser user.email
  // console.log(email);

  useEffect(() => {
      dispatch(getWishlist(email));
    }, [dispatch]);
    
    const onDelete = (_id) => {
      dispatch(removeWishlist(_id));
    }
    
    // console.log(list);

  return (
    <Box>
      <Flex
        w="full"
        bg="gray.600"
        p={50}
        alignItems="center"
        justifyContent="center"
      >
        <Stack
          direction={{ base: "column" }}
          w="full"
          bg={{ md: bg }}
          shadow="lg"
        >
          <chakra.h1
            mb={6}
            fontSize={{ base: "4xl", md: "6xl" }}
            fontWeight="bold"
            lineHeight="none"
            letterSpacing={{ base: "normal", md: "tight" }}
            color={useColorModeValue("gray.900", "gray.100")}
          >
            <Text
              display={{ base: "block", lg: "inline" }}
              w="full"
              bgClip="text"
              bgGradient="linear(to-r, green.400,purple.500)"
              fontWeight="extrabold"
              justify={{ md: "center" }}
            >
              Favoritos
            </Text>{" "}
          </chakra.h1>
          {data.map((product, pid) => {
            return (
              <Flex
                direction={{ base: "row", md: "column" }}
                bg={dataColor}
                key={pid}
              >
                <SimpleGrid
                  spacingY={3}
                  columns={{ base: 1, md: 6 }}
                  w={{ base: 120, md: "full" }}
                  textTransform="uppercase"
                  bg={bg2}
                  color={"gray.500"}
                  py={{ base: 1, md: 4 }}
                  px={{ base: 2, md: 10 }}
                  fontSize="md"
                  fontWeight="hairline"
                >
                  <span>Product</span>
                  <span>Brand</span>
                  <span>Color</span>
                  <span>Gender</span>
                  <span>Stock</span>
                  <chakra.span textAlign={{ md: "right" }}>Actions</chakra.span>
                </SimpleGrid>
                <SimpleGrid
                  spacingY={3}
                  columns={{ base: 1, md: 6 }}
                  w="full"
                  py={2}
                  px={10}
                  fontWeight="hairline"
                >
                  <span>{product.name}</span>
                  {/* <span>{product.name}</span> */}
                  <chakra.span
                    textOverflow="ellipsis"
                    overflow="hidden"
                    whiteSpace="nowrap"
                  >
                    {product.brand}
                    {/* {product.brand} */}
                  </chakra.span>
                  <span>{product.color}</span>
                  {/* {product.color} */}
                  <span>{product.gender}</span>
                  {/* {product.gender} */}
                  <span>{product.stock}</span>
                  {/* {product.stock} */}
                  <Flex justify={{ md: "end" }}>
                    <Button variant="solid" colorScheme="red" size="sm" >
                      Delete
                    </Button>
                  </Flex>
                </SimpleGrid>
              </Flex>
            );
          })}
        </Stack>
      </Flex>
      <Flex justify={{ md: "center" }}>
        <Button variant="solid" colorScheme="green" size="lg">
          Save
        </Button>
      </Flex>
    </Box>
  );
}
