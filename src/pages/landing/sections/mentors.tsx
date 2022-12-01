import { AspectRatio, Box, HStack, Icon, Img, Link, Text } from '@chakra-ui/react';
import Reach from 'react';
import grp1879 from "../../../assets/Group 1879.png";
import grp1885 from "../../../assets/Group 1885.png";
import rec7 from "../../../assets/Rectangle 700.png";
import rec8 from "../../../assets/Rectangle 698.png";
import {AiOutlineRight} from 'react-icons/ai';
import {AiOutlineLeft} from 'react-icons/ai';

export const Mentors =() =>{
    return( 
    <><Box w="full">
            <AspectRatio top="6210px" w="427px" h="350px" left="180px" zIndex={9} position="absolute">
                <Img src={grp1879} />
            </AspectRatio>
            <AspectRatio top="6210px" w="427px" h="350px" left="800px" zIndex={9} position="absolute">
                <Img src={grp1885} />
            </AspectRatio>
            <AspectRatio top="5720px" w="1349px" h="850px" left="0px" zIndex={8} position="absolute">
                <Img src={rec7} />
            </AspectRatio>
            <AspectRatio top="6300px" w="40px" h="40px" left="1203px" zIndex={8} position="absolute">
                <Img src={rec8} />
            </AspectRatio>
            <AspectRatio top="6300px" w="40px" h="40px" left="100px" zIndex={8} position="absolute">
                <Img src={rec8} />
            </AspectRatio>
        </Box>
        <HStack color="whiteAlpha.900" spacing="30px" letterSpacing="0.5px">
            <Link><Text color="black" zIndex={10} fontSize="50px" top="5890px" left="350px" letterSpacing="2px" position="absolute">Meet our amazing tuto😮rs</Text></Link>
            <Link><Icon color="white" as={AiOutlineRight} h="22px" w="22px" left="1210px" top="6307px" position="absolute" zIndex={10}/></Link>
            <Link><Icon color="white" as={AiOutlineLeft} h="22px" w="22px" left="110px" top="6307px" position="absolute" zIndex={10}/></Link>
        </HStack></>
    );    
}