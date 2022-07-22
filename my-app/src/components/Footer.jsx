import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    VisuallyHidden,
  } from "@chakra-ui/react";
  import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
  import { Link } from "react-router-dom";
  
  const SocialButton = ({
    children,
    label,
  }) => {
    return (
      <chakra.button
        bg={"goldenrod"}
        color={"black"}
        rounded={"full"}
        w={8}
        h={8}
        cursor={"pointer"}
        as={"a"}
        display={"inline-flex"}
        alignItems={"center"}
        justifyContent={"center"}
        transition={"background 0.3s ease"}
        _hover={{
          bg: "white",
        }}
      >
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function SmallWithSocial() {
    return (
      <Box
        bg={"black"}
        color={"goldenrod"}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>© 2022 e-commerce. All rights reserved</Text>
          <Stack direction={"row"} spacing={6}>
            <Link to="pagenotfound">
              <SocialButton label={"Twitter"}>
                <FaTwitter />
              </SocialButton>
            </Link>
            <Link to="pagenotfound">
              <SocialButton label={"YouTube"}>
                <FaYoutube />
              </SocialButton>
            </Link>
            <Link to="pagenotfound">
              <SocialButton label={"Instagram"}>
                <FaInstagram />
              </SocialButton>
            </Link>
          </Stack>
        </Container>
      </Box>
    );
  }