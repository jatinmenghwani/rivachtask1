import { AspectRatio, Box, Flex, Heading, HStack, Img, Link, Text } from '@chakra-ui/react';
import Reach from 'react';
import "./style.css";

import Group21871 from "../../../assets/Group 21871.png";
import Group1848 from "../../../assets/Group 1848.png";
import Ellipse234 from "../../../assets/Ellipse 234.png";
import Ellipse234a from "../../../assets/Ellipse 234a.png";
import Ellipse234b from "../../../assets/Ellipse 234b.png";
import Ellipse234c from "../../../assets/Ellipse 234c.png";
import Ellipse234d from "../../../assets/Ellipse 234d.png";
import Group1864 from "../../../assets/Group 1864.png";
import Group1780 from "../../../assets/Group 1780.png";
import Rec from "../../../assets/Rectangle 670.png";


export const Services =() =>{
    return (
    <Box w="full" py="500px">
        <AspectRatio  top="1210px" w="65px" h="65px" left="430px" zIndex={9} position="absolute">
            <Img src={Ellipse234} />
        </AspectRatio>
        <AspectRatio  top="1145px" w="190px" h="190px" left="470px" zIndex={8} position="absolute">
            <Img src={Ellipse234a} />
        </AspectRatio> 
        <AspectRatio  top="1210px" w="65px" h="65px" left="630px" zIndex={7} position="absolute">
            <Img src={Ellipse234b} />
        </AspectRatio> 
        <AspectRatio  top="1210px" w="62px" h="62px" left="730px" zIndex={7} position="absolute">
            <Img src={Ellipse234c} />
        </AspectRatio>
        <AspectRatio  top="1210px" w="65px" h="65px" left="830px" zIndex={7} position="absolute">
            <Img src={Ellipse234d} />
        </AspectRatio>
        <AspectRatio  top="1200px" w="530px" h="90px" left="400px" zIndex={6} position="absolute">
                <Img src={Group21871} />
        </AspectRatio>
        <AspectRatio  top="1400px" w="1345px" h="180px" zIndex={6} position="absolute">
                <Img src={Group1864}/>
        </AspectRatio>
        <AspectRatio  top="1800px" w="860px" h="250px" left="250px" zIndex={6} position="absolute">
                <Img src={Group1780}/>
        </AspectRatio>
        <AspectRatio  top="1985px" w="160px" h="40px" left="360px" zIndex={6} position="absolute">
                <Img src={Rec}/>
        </AspectRatio>
           
        <Flex justifyContent="center">
            <Heading></Heading>
            <Text color="black" zIndex={5} fontSize="20px" top="1100px" position="absolute">What are you looking for?</Text>
            <Link><Text color="white" zIndex={10} fontSize="10px" top="1265px" left="442px" position="absolute">Mentoring</Text></Link>
            <Link><Text color="white" zIndex={10} fontSize="10px" top="1265px" left="545px" position="absolute">Coaching</Text></Link>
            <Link><Text color="white" zIndex={10} fontSize="10px" top="1265px" left="635px" position="absolute">Home Tutions</Text></Link>
            <Link><Text color="white" zIndex={10} fontSize="10px" top="1265px" left="735px" position="absolute">Online Tutions</Text></Link>
            <Link><Text color="white" zIndex={10} fontSize="10px" top="1265px" left="835px" position="absolute">Live Sessions</Text></Link>
            <Link><Text color="whiteAlpha.800" zIndex={10} fontSize="20px" top="1990px" left="380px" letterSpacing="2px" position="absolute">REGISTER</Text></Link>

        </Flex>
        <HStack></HStack>
    </Box>
    );     
}