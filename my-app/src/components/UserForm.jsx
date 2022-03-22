import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  Avatar,
  Center,
  FormHelperText,
  useToast,
} from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import { useForm } from "react-hook-form";
import { newUser, getAllUsers } from "../actions/creates";

export default function UserForm() {
  const { user, getAccessTokenSilently } = useAuth0();
  const dispatch = useDispatch();
  const toast = useToast();
  const users = useSelector((state) => state.allUsers);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = async (submit) => {
    let currentUser = users?.filter((users) => users.email === user.email);
    if (currentUser.length > 0) {
      //   dispatch(updateUser(currentUser[0]._id, submit));
      const token = await getAccessTokenSilently();
      await axios.put(`http://localhost:4000/user/${currentUser[0]._id}`, submit, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(token);
      toast({
        title: "Datos actualizados!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      console.log(submit);
    } else {
      dispatch(newUser(submit));
      toast({
        title: "Nuevo usuario guardado!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  return (
    <div>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack
          spacing={4}
          w={"full"}
          maxW={"md"}
          bg={useColorModeValue("white", "gray.700")}
          rounded={"xl"}
          boxShadow={"lg"}
          p={6}
          my={12}
        >
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
            User Profile Edit
          </Heading>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl id="image">
              <Stack direction={["column", "row"]} spacing={6}>
                <Center>
                  <Avatar size="xl" src={user.picture}></Avatar>
                </Center>
              </Stack>
            </FormControl>
            <FormControl id="name" isRequired>
              <FormLabel>First name</FormLabel>
              <Input
                placeholder={user.name}
                _placeholder={{ color: "gray.500" }}
                type="text"
                {...register("name")}
              />
              {setValue("name", `${user.name}`)}
            </FormControl>
            <FormControl id="lastName" isRequired>
              <FormLabel>Last name</FormLabel>
              <Input
                placeholder="Last name"
                _placeholder={{ color: "gray.500" }}
                type="text"
                {...register("lastName")}
              />
              {setValue("name", `${user.name}`)}
            </FormControl>
            <FormControl id="userName" isRequired>
              <FormLabel>Last name</FormLabel>
              <Input
                placeholder="User name"
                _placeholder={{ color: "gray.500" }}
                type="text"
                {...register("userName")}
              />
            </FormControl>
            <FormControl id="email" isRequired isReadOnly>
              <FormLabel>Email address</FormLabel>
              <Input
                placeholder={user.email}
                _placeholder={{ color: "gray.500" }}
                type="email"
                {...register("email")}
              />
              {setValue("email", `${user.email}`)}
              <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                placeholder="Password"
                _placeholder={{ color: "gray.500" }}
                type="password"
                {...register("password")}
              />
            </FormControl>
            <FormControl id="confirm-password" isRequired>
              <FormLabel>Confirm password</FormLabel>
              <Input
                placeholder="Confirm password"
                _placeholder={{ color: "gray.500" }}
                type="password"
              />
            </FormControl>
            <FormControl id="birthday" isRequired>
              <FormLabel>Birthday</FormLabel>
              <Input
                placeholder="Birthday"
                _placeholder={{ color: "gray.500" }}
                type="date"
                {...register("birthDate")}
              />
            </FormControl>
            <Stack spacing={6} direction={["column", "row"]}>
              <Button
                bg={"blue.400"}
                color={"white"}
                w="full"
                _hover={{
                  bg: "blue.500",
                }}
                isLoading={isSubmitting}
                type="submit"
              >
                Save
              </Button>
            </Stack>
          </form>
        </Stack>
      </Flex>
    </div>
  );
}
