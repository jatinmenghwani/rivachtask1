import { AspectRatio, Box, Flex, Heading, Icon, Img, Link, Text } from '@chakra-ui/react';
import Reach from 'react';
import { Image } from '@chakra-ui/react'
import { FiPhoneCall } from 'react-icons/fi';
import {FaWpforms} from 'react-icons/fa';

import Group1828 from "../../../assets/Group 1828.png";
import Mask from "../../../assets/Group 2187.png";
import Group1749 from "../../../assets/Group 1749.png";
import Group1866 from "../../../assets/Group 1866.png";
import Group1867 from "../../../assets/Group 1867.png";
import Group1899 from "../../../assets/Group 1899.png";
import Reg from "../../../assets/Mask group2.png";


export const Intro =() =>{
    return(
    <><Box width="full" position="absolute">



            <AspectRatio ratio={16 /4} width="full" height="2000px" top="0%" position="absolute">
                <Img src={Mask} />
            </AspectRatio>
            <AspectRatio w="250.75px" h="250px" left="70%" top="180px" position="absolute">
                <Img src={Group1828} />
            </AspectRatio>
            <AspectRatio w="280px" h="70px" left="20%" top="160px" position="absolute">
                <Img src={Group1866} />
            </AspectRatio>
            <AspectRatio w="360px" h="70px" left="20%" top="230px" position="absolute">
                <Img src={Group1749} />
            </AspectRatio>
            <AspectRatio w="320px" h="70px" left="20%" top="300px" position="absolute">
                <Img src={Group1867} />
            </AspectRatio>
            <AspectRatio w="360px" h="70px" left="20%" top="365px" position="absolute">
                <Img src={Reg} />
            </AspectRatio>
            <AspectRatio w="52px" h="52px" left="1288px" top="337px" position="absolute">
                <Img src={Group1899} />
            </AspectRatio>
            <AspectRatio w="52px" h="52px" left="1288px" top="337px" position="absolute">
                <Img src={Group1899} />
            </AspectRatio>
            <AspectRatio w="52px" h="52px" left="1290px" top="390px" position="absolute">
                <Img src={Group1899} />
            </AspectRatio>
            <AspectRatio w="52px" h="52px" left="1290px" top="390px" position="absolute">
                <Img src={Group1899} />
            </AspectRatio>

            <Flex>
                <Heading></Heading>
                <Box position="relative" zIndex={4}>
                   <Link><Text top="380px" position="relative" fontSize="25px" fontFamily="Poppins" left="300px" letterSpacing="2px" color="#857AFF">REGISTER AS STUDENT</Text></Link>
                   <Text top="350px" position="relative" fontSize="15px" fontFamily="Poppins" left="650px" letterSpacing="2px" color="white">FREE</Text>
                   <Text top="380px" position="relative" fontSize="15px" fontFamily="Poppins" left="450px" letterSpacing="2px" color="white">OR</Text>
                   <Text top="400px" position="relative" fontSize="20px" fontFamily="Poppins" left="350px" letterSpacing="2px" color="white" textDecoration="underline" textDecorationColor="whiteAlpha.400">REGISTER AS TUTOR</Text>

                    <Link><Icon as={FiPhoneCall} mr="10px" h="6" w="6" left="1300px" top="238px" color="white" position="relative"/></Link>
                    <Link><Icon as={FaWpforms} mr="10px" h="6" w="6" left="1270px" top="290px" color="white" position="relative"/></Link>

                </Box>
            </Flex>
        </Box>
    </>
    )
};