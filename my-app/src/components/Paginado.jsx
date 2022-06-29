import React from "react";
import "../css/Paginado.css";
import { chakra, Flex, Box } from "@chakra-ui/react";

function Paginado({ productsPerPage, allProducts, paginado, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <Flex>
        <Box p={4}>
      <ul className="order">
        {pageNumbers &&
          pageNumbers.map((number) => (
            <li key={number}>
              {
                (currentPage === number ? (
                  <chakra.button
                    mx={4}
                    px={4}
                    py={2}
                    marginRight={1}
                    rounded="md"
                    bg="white"
                    color="goldenrod"
                    _active="black"
                    _focus="black"
                    onClick={() => paginado(number)}
                  >
                    {number}
                  </chakra.button>
                ) : (
                  <chakra.button
                    mx={4}
                    px={4}
                    py={2}
                    marginRight={1}
                    rounded="md"
                    bg="black"
                    color="goldenrod"
                    onClick={() => paginado(number)}
                  >
                    {number}
                  </chakra.button>
                ))
              }
            </li>
          ))}
      </ul>
      </Box>
      </Flex>
    </nav>
  );
}

export default Paginado;
