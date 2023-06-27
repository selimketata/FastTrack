import React from "react";
import CarouselSlider from "react-carousel-slider";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import img1 from "./Assets/1.jpg"
import img2 from "./Assets/2.jpg"
import img3 from "./Assets/3.jpg"
import img4 from "./Assets/4.jpg"
import img5 from "./Assets/5.jpg"
import img6 from "./Assets/6.jpg"
import img7 from "./Assets/7.jpg"
import img8 from "./Assets/8.jpg"
import img9 from "./Assets/9.jpg"
import img10 from "./Assets/10.jpg"
import img11 from "./Assets/11.jpg"
import img12 from "./Assets/12.jpg"
import img13 from "./Assets/13.jpg"
import { Trans } from "react-i18next";



let data = [
    {
        //des: "1",
        imgSrc: img1
    },
    {
        //des: "2",
        imgSrc: img2
    },
    {
        //des: "3",
        imgSrc: img3
    },
    {
        //des: "4",
        imgSrc: img4
    },
    {
        //des: "5",
        imgSrc: img5
    },
    {
        //des: "6",
        imgSrc: img6
    }
    ,
    {
        //des: "7",
        imgSrc: img7
    },
    {
        //des: "8",
        imgSrc: img8
    },
    {
        //des: "9",
        imgSrc: img9
    },
    {
        //des: "10",
        imgSrc: img10
    },
    {
        //des: "11",
        imgSrc: img11
    },
    {
        //des: "12",
        imgSrc: img12
    },
    {
        //des: "13",
        imgSrc: img13
    }
];

/* Percantage to set height does not work well 
in prop sliderBoxStyle here because we could 
not init the height of parent element */

let sliderBoxStyle = {
    height: "250px"
    //, width: "200px"
    , background: "tranparent"
};

let itemsStyle = {
    // ,height: "100%", padding: "0px"
    // , padding: "15px"
    // , background: "#FFCA28"
    // , borderRadius: "4px"
    // , margin: "0px 0px", padding: "0px"
};

let textBoxStyle = {
    // textAlign: "left"
    // ,width:"50%"
    // , background: "transparent"
    // , fontSize: "36px"
    // , fontWeight: 300
};

let buttonSetting = {
    placeOn: "middle-inside"
    , hoverEvent: true,
    // , style: {
    //   left: {
    //     margin: "0px 0px 0px 10px"
    //   },
    //   right: {
    //     margin: "0px 10px 0px 0px"
    //   }
    // }
};

let manner = {
    autoSliding: { interval: "4s" }
    , duration: "0.3s"
};

export default function Slider() {
    return (
        <div>
            <Box
                sx={{
                    pt: 7,
                    pb: 0,
                }}
            >
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    gutterBottom
                    sx={{ fontWeight: 'bold' }}
                    style={{ color: "#393E46" }}
                >
                    <Trans i18nKey="Client">trans</Trans>
                </Typography>
            </Box>
            <CarouselSlider
                slideItems={data}
                manner={manner}
                buttonSetting={buttonSetting}
                sliderBoxStyle={sliderBoxStyle}
                itemsStyle={itemsStyle}
                textBoxStyle={textBoxStyle}
            />
        </div>

    )
}