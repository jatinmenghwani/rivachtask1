import { AspectRatio, Box, Flex, Heading, HStack, Icon, Img, Link, Text } from '@chakra-ui/react';
import Reach from 'react';
import { AiOutlineInstagram, AiOutlineLeft, AiOutlineLinkedin, AiOutlineWhatsApp } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import fra from "../assets/Frame 3.png";
import fra1 from "../assets/Group 1798.png";
import mga from "../assets/Mask groupaa.png";

export const Footer =() =>{
    return( 
        <><><Box w="full">
            <AspectRatio top="6810px" w="1349px" h="480.056px" ratio={3.8 / 1} zIndex={9} position="absolute">
                <Img src={fra} />
            </AspectRatio>
            <AspectRatio top="6910px" left="150px" w="550px" h="200px" ratio={3.8 / 1} zIndex={9} position="absolute">
                <Img src={fra1} />
            </AspectRatio>
            <AspectRatio top="7150px" left="180px" w="250px" h="80px" ratio={3.8 / 1} zIndex={9} position="absolute">
                <Img src={mga} />
            </AspectRatio>
            <Link><b><Text color="#9D94FF" zIndex={10} fontSize="22px" top="7170px" left="210px" letterSpacing="2px" position="absolute">REGISTER NOW</Text></b></Link>
            <b><Text color="white" zIndex={10} fontSize="15px" top="7175px" left="490px" letterSpacing="2px" position="absolute">FREE</Text></b>
        </Box>
</>
            <Flex px="40px" py="5px" width="full" bg="#9C93FF" position="absolute" top="7250px" zIndex={10} alignItems="center" justifyContent="space-between">
                <Flex alignItems="flex-end">
                    <Heading color="whiteAlpha.900" mr="80px" fontSize="24px" letterSpacing="1px">MTH</Heading>
                    <HStack color="whiteAlpha.900" spacing="30px" letterSpacing="0.5px">
                        <Link><Icon as={AiOutlineInstagram} mr="10px" h="6" w="6" /></Link>
                        <Link><Icon as={AiOutlineWhatsApp} mr="10px" h="6" w="6" /></Link>
                        <Link><Icon as={AiOutlineLinkedin} mr="10px" h="6" w="6" /></Link>
                        <Link><Icon as={FaTelegramPlane} mr="10px" h="6" w="6" /></Link>
                        <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;© 2020 Copyright: MyTutorsHub.com</Text>
                    </HStack>
                </Flex>

            </Flex></>
    );
}