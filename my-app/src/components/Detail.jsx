import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductByID, addCart, stock } from "../actions/creates";
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  List,
  ListItem,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import TablaDeTalles from "../img/TablaDeTalles.jpg";

function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.detail);
  const [alert, setAlert] = useState(false)
  const cart = useSelector(state => state.cart)

  useEffect(() => {
    dispatch(getProductByID(id));
    localStorage.setItem('items', JSON.stringify(cart))
  }, [dispatch, id, cart]);

  const addToCart = (payload) => {
    dispatch(addCart(payload));
    dispatch(stock("decrement", id))
    setAlert(true)
  };

  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 2, md: 1 }}
        py={{ base: 18, md: 6 }}
        backgroundColor={"blackAlpha.50"}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={product.image}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={"40%"}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 5 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={650}
              fontSize={{ base: "6x1", sm: "6xl", lg: "2xl" }}
              color={"goldenrod"}
            >
              {product.name}
            </Heading>
            <Text
              color={"goldenrod"}
              fontWeight={500}
              fontSize={"3xl"}
            >
              ${product.price}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={"goldenrod"}
              />
            }
          >
            <VStack spacing={{ base: 2, sm: 3 }}>
              <Text
                color={"black"}
                fontSize={"1xl"}
                fontWeight={"150"}
              >
                {product.description}
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "22px" }}
                color={"goldenrod"}
                fontWeight={"600"}
                textTransform={"uppercase"}
                mb={"8"}
              >
                Product Details
              </Text>

              <List spacing={1}>
                <ListItem>
                  <Text as={"span"} color={"goldenrod"} fontWeight={"bold"}>
                    Brand:
                  </Text>{" "}
                  {product.brand}
                </ListItem>
                <ListItem>
                  <Text as={"span"} color={"goldenrod"} fontWeight={"bold"}>
                    Model:
                  </Text>{" "}
                  {product.model}
                </ListItem>
                <ListItem>
                  <Text as={"span"} color={"goldenrod"} fontWeight={"bold"}>
                    Category:
                  </Text>{" "}
                  {product.category}
                </ListItem>
                <ListItem>
                  <Text as={"span"} color={"goldenrod"} fontWeight={"bold"}>
                    Gender:
                  </Text>{" "}
                  {product.gender}
                </ListItem>
                <ListItem>
                  <Text as={"span"} color={"goldenrod"} fontWeight={"bold"}>
                    Size:
                  </Text>{" "}
                    <select spacing={1}>
                    {product.size?.map((s) => {
                      return (
                        <option key={s} style={{ margin: "5px" }}>
                          {s}
                        </option>
                      );
                    })}
                    </select>
                </ListItem>
                <ListItem>
                  <ul>
                    <img src={TablaDeTalles} alt="sizeToSelect" width={500} />
                  </ul>
                </ListItem>
                <ListItem>
                  <Text as={"span"} color={"goldenrod"} fontWeight={"bold"}>
                    Colors:
                  </Text>{" "}
                  <ul style={{ display: "flex", flexDirection: "row" }}>
                    {product.color?.map((c) => {
                      return (
                        <option key={c} style={{ margin: "5px" }}>
                          {c}
                        </option>
                      );
                    })}
                  </ul>
                </ListItem>
              </List>
            </Box>
          </Stack>

          <Button
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={"black"}
            color={"goldenrod"}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(15px)",
              boxShadow: "lg",
              color: "black",
              backgroundColor: "goldenrod"
            }}
            onClick={() => addToCart(product._id)}
          >
            Add to cart
          </Button>

          {
            alert?
            <Alert status="success">
              <AlertIcon />
              <Box flex="1">
                <AlertTitle>Success!</AlertTitle>
                <AlertDescription display="block">
                  Product added to cart
                </AlertDescription>
              </Box>
            </Alert>:
            null
          }
          <Stack direction="row" alignItems="center" justifyContent={"center"}>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}

export default Detail;
