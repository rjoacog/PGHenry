import React, { useEffect } from "react";
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
  FormErrorMessage,
  FormHelperText,
  useToast,
} from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import { useForm } from "react-hook-form";
import { newUser, updateUser, getAllUsers } from "../actions/creates";

export default function UserForm() {
  const { user } = useAuth0();
  const dispatch = useDispatch();
  const toast = useToast();
  const users = useSelector((state) => state.allUsers);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (submit) => {
    let currentUser = users.filter((users) => users.email === user.email);
    if (currentUser.length > 0) {
    //   dispatch(updateUser(currentUser[0]._id, submit));
    console.log(currentUser[0]._id);
    dispatch(updateUser(currentUser[0]._id, submit));
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
  // function onSubmit(values) {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       alert(JSON.stringify(values, null, 2))
  //       resolve()
  //     }, 3000)
  //   })
  // }

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
            <FormControl id="userName">
              <Stack direction={["column", "row"]} spacing={6}>
                <Center>
                  <Avatar size="xl" src={user.picture}></Avatar>
                </Center>
                <Center w="full">
                  <Button w="full" isDisabled={true}>
                    Change profile photo
                  </Button>
                </Center>
              </Stack>
            </FormControl>
            <FormControl htmlFor="name" isInvalid={errors.name} isRequired>
              <FormLabel>First name</FormLabel>
              <Input
                placeholder={user.name}
                _placeholder={{ color: "gray.500" }}
                type="text"
                {...register("name", {
                  minLength: { value: 4, message: "Minimo 4 caracteres" },
                  maxLength: { value: 8, message: "Maximo 8 caracteres" },
                })}
              />
              <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl id="lastName" isRequired>
              <FormLabel>Last name</FormLabel>
              <Input
                placeholder="Last name"
                _placeholder={{ color: "gray.500" }}
                type="text"
                {...register("lastName")}
              />
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
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                placeholder={user.email}
                _placeholder={{ color: "gray.500" }}
                type="email"
                {...register("email")}
              />
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
