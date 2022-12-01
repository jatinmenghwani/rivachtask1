import { AspectRatio, Box, Flex, Heading, HStack, Icon, Img, Link, Text } from '@chakra-ui/react';
import Reach from 'react';
import {FiPhoneCall} from "react-icons/fi";
import mga from "../assets/Mask groupaa.png";

export const Header =() =>{
    return (
    <Flex px="40px" py="10px" width="full" bg="#9C93FF" alignItems="center" justifyContent="space-between">
        <Flex alignItems="flex-end">
            <Heading color="whiteAlpha.900" mr="80px" fontSize="24px" letterSpacing="1px">MTH</Heading>
            <HStack color="whiteAlpha.900" spacing="30px" letterSpacing="0.5px">
                <Link>Home Tutions</Link>
                <Link>Online Tutions</Link>
            </HStack>
        </Flex>
        <HStack color="whiteAlpha.900" spacing="30px" letterSpacing="0.5px">
                <Link><Icon as={FiPhoneCall} mr="10px" h="4" w="4"/>012 (345) 678 99</Link>
                <Link zIndex={2} color="#857AFF"><Text><b>REGISTER NOW</b></Text></Link>
            </HStack>
            <AspectRatio top="5px" left="1165px" w="160px" h="40px" ratio={3.8 / 1} zIndex={0} position="absolute">
                <Img src={mga} />
            </AspectRatio>    
    </Flex>
    ) 
};