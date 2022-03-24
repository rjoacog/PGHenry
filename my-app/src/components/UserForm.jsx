import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clienteAxios } from "../config/clienteAxios";
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
import { getAllUsers, userData } from "../actions/creates";

export default function UserForm() {
  const { user, getAccessTokenSilently } = useAuth0();
  const dispatch = useDispatch();
  const toast = useToast();
  const users = useSelector((state) => state.allUsers);
  const userDetail = useSelector((state) => state.userData);
  //const currentUser = users.filter((el) => el.email === user.email);


  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = async (submit) => {
    let currentUser = users?.filter((users) => users.email === user.email);
    if (currentUser.length > 0) {
      //   dispatch(updateUser(currentUser[0]._id, submit));
      const token = await getAccessTokenSilently();
      await clienteAxios.put(`/user/${currentUser[0]._id}`, submit, {
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
      dispatch(userData(submit));
      console.log(submit);
    } else {
      clienteAxios.post("/user", submit);
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
            <FormControl id="name" >
              <FormLabel>First name</FormLabel>
              <Input
                placeholder={user.name}
                _placeholder={{ color: "gray.500" }}
                type="text"
                {...register("name")}
              />
              {setValue("name", userDetail?.name?.length > 0 ? `${userDetail.name}` : "")}
            </FormControl>
            <FormControl id="lastName" >
              <FormLabel>Last name</FormLabel>
              <Input
                placeholder="Last name"
                _placeholder={{ color: "gray.500" }}
                type="text"
                {...register("lastName")}
              />
              {setValue("lastName", userDetail?.lastName?.length > 0 ? `${userDetail.lastName}` : "")}
            </FormControl>
            {/* <FormControl id="userName" isRequired>
              <FormLabel>Last name</FormLabel>
              <Input
                placeholder="User name"
                _placeholder={{ color: "gray.500" }}
                type="text"
                {...register("userName")}
              />
            </FormControl> */}
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
            <FormControl id="password" >
              <FormLabel>Password</FormLabel>
              <Input
                placeholder="Password"
                _placeholder={{ color: "gray.500" }}
                type="password"
                {...register("password")}
              />
              {setValue("password", userDetail?.password?.length > 0 ? `${userDetail.password}` : "")}
            </FormControl>
            <FormControl id="confirm-password" >
              <FormLabel>Confirm password</FormLabel>
              <Input
                placeholder="Confirm password"
                _placeholder={{ color: "gray.500" }}
                type="password"
                {...register("confirm password" )}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Adress</FormLabel>
              <Input
                placeholder="Adress"
                _placeholder={{color: "gray.500"}}
                type="text"
                {...register("adress")}
              />
              {setValue("adress", userDetail?.adress?.length > 0 ? `${userDetail.adress}` : "")}
            </FormControl>
            <FormControl id="birthday" >
              <FormLabel>Birthday</FormLabel>
              <Input
                placeholder="Birthday"
                _placeholder={{ color: "gray.500" }}
                type="date"
                {...register("birthDate")}
              />
              {setValue("birthDate", userDetail?.birthDate?.length > 0 ? `${userDetail.birthDate}` : "")}
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
