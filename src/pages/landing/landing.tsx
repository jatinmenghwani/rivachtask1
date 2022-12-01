import { Box } from '@chakra-ui/react';
import React from "react";
import {Intro} from "./sections/intro";
import {Services} from "./sections/services";
import {Comments} from "./sections/comments";
import {WhatWeDo} from "./sections/whatwedo";
import {Mentors} from "./sections/mentors";

export const Landing =() =>{
    return <Box>
        <Intro/>
        <Services/>
        <Comments/>
        <WhatWeDo/>
        <Mentors/>
    </Box>
}