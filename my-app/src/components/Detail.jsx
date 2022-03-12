import React, { useEffect } from "react";
import {useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductByID, addCart } from "../actions/creates";
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
  useColorModeValue,
  List,
  ListItem,
} from '@chakra-ui/react';
import { MdLocalShipping } from 'react-icons/md';


function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.detail);


  useEffect(() => {
    dispatch(getProductByID(id));
  }, [dispatch, id]);

  const addToCart = (payload) => {
    dispatch(addCart(payload))
  }

  return (
    <Container maxW={'7xl'}>
    <SimpleGrid
      columns={{ base: 1, lg: 2 }}
      spacing={{ base: 8, md: 10 }}
      py={{ base: 18, md: 24 }}>
      <Flex>
        <Image
          rounded={'md'}
          alt={'product image'}
          src={product.image}
          fit={'cover'}
          align={'center'}
          w={'100%'}
          h={{ base: '100%', sm: '400px', lg: '500px' }}
        />
      </Flex>
      <Stack spacing={{ base: 6, md: 10 }}>
        <Box as={'header'}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
            {product.name}
          </Heading>
          <Text
            color={useColorModeValue('gray.900', 'gray.400')}
            fontWeight={300}
            fontSize={'2xl'}>
            ${product.price}
          </Text>
        </Box>

        <Stack
          spacing={{ base: 4, sm: 6 }}
          direction={'column'}
          divider={
            <StackDivider
              borderColor={useColorModeValue('gray.200', 'gray.600')}
            />
          }>
          <VStack spacing={{ base: 4, sm: 6 }}>
            <Text
              color={useColorModeValue('gray.500', 'gray.400')}
              fontSize={'2xl'}
              fontWeight={'300'}>
              {product.description}
            </Text>
          </VStack>
          <Box>
            <Text
              fontSize={{ base: '16px', lg: '18px' }}
              color={'#319593'}
              fontWeight={'500'}
              textTransform={'uppercase'}
              mb={'4'}>
              Product Details
            </Text>

            <List spacing={2}>
              <ListItem>
                <Text as={'span'} fontWeight={'bold'}>
                  Brand:
                </Text>{' '}
                {product.brand}
              </ListItem>
              <ListItem>
                <Text as={'span'} fontWeight={'bold'}>
                  Model:
                </Text>{' '}
                {product.model}
              </ListItem>
              <ListItem>
                <Text as={'span'} fontWeight={'bold'}>
                  Category:
                </Text>{' '}
                {product.category}
              </ListItem>
              <ListItem>
                <Text as={'span'} fontWeight={'bold'}>
                  Gender:
                </Text>{' '}
                {product.gender}
              </ListItem>
              <ListItem>
                <Text as={'span'} fontWeight={'bold'}>
                  Size:
                </Text>{' '}
                <ul style={{display:'flex', flexDirection:'row'}}>
                  {
                    product.size?.map(s =>{
                      return(
                        <ul key={s} style={{margin: '5px'}}>{s}</ul>
                      )
                    })
                  }
                </ul>
              </ListItem>
              <ListItem>
                <Text as={'span'} fontWeight={'bold'}>
                  Colors:
                </Text>{' '}
                <ul style={{display:'flex', flexDirection:'row'}}>
                  {
                    product.color?.map(c =>{
                      return(
                        <ul key={c} style={{margin: '5px'}}>{c}</ul>
                      )
                    })
                  }
                </ul>
              </ListItem>
            </List>
          </Box>
        </Stack>

        <Button
          rounded={'none'}
          w={'full'}
          mt={8}
          size={'lg'}
          py={'7'}
          bg={'#319593'}
          color={useColorModeValue('white', 'gray.900')}
          textTransform={'uppercase'}
          _hover={{
            transform: 'translateY(2px)',
            boxShadow: 'lg',
          }}
          onClick={() => addToCart(product._id)}>
          Add to cart
        </Button>

        <Stack direction="row" alignItems="center" justifyContent={'center'}>
          <MdLocalShipping />
          <Text>2-3 business days delivery</Text>
        </Stack>
      </Stack>
    </SimpleGrid>
  </Container>
);
}

export default Detail;
