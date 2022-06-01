import React from "react";
import {Box} from "@chakra-ui/react";
const Ticket = () => {
    return <React.Fragment>
        <Box
            className={"box-1"}
            shadow='2xl'
            rounded='md'
            w="60%"
            minH="200px"
            p='4'
            background='#fffccc'
            transform= 'scale(1.1) translate(-1px, -2px) skew(-14deg, -4deg)'
            _hover={{ shadow: "2xl", transform: 'translateX(-10em)  !important', transitionDuration:'2s'}}
        >
            ticket
        </Box>
    </React.Fragment>
}
export default Ticket