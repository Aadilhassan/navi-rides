import React from 'react'
import "./Dummy.css"

import { PropertyCardProps } from "interfaces/property";
import Place from "@mui/icons-material/Place";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import CallIcon from '@mui/icons-material/Call';

import ReactWhatsapp from './ReactWhatsapp';
import Call from './Call';

import { AgentCardProp, InfoBarProps } from "interfaces/agent";

function checkImage(url: any) {
  const img = new Image();
  img.src = url;
  return img.width !== 0 && img.height !== 0;
}

const PropertyCard = ({
    id,
    title,
    name,
    date,
    time,
    min,
    number,
    location,
    dropLocation,
    currency,
    price,
    photo,
}: PropertyCardProps) => {
    return (
        <Card
            component={Link}
            to={`/properties/show/${id}`}
            sx={{
                minWidth: "275px",
                padding: "10px",
                "&:hover": {
                    boxShadow: "0 22px 45px 2px #dbdad8",
                },
                cursor: "pointer",
                borderRadius: "10px",
            }}
            elevation={0}
        >
           <CardContent>
      <Box className="cookie-card" style={{border: "1px solid black", width: "24rem"}}>
        <div className="line1">
          <span className="title">{date} | {time}</span>
          <div className="sub-line1">
            <span className="price" style={{paddingLeft: "1rem", color: "#55ee2e", fontWeight:"bold"}}>{currency} {price}</span>
          </div>
        </div>
        <p className="description">
          From: {location}
          <br/>
          To: {dropLocation}
        </p>
        <div className="line2">
          <p className="car">
            {title}
            <br />
            {number}
          </p>
          <p className="car">
              <div style={{display: "flex"}}>
                <div style={{paddingRight: "1rem", marginTop: "3.5px"}}>
                  <Call number={number}/>
                </div>
                <div>
                  <ReactWhatsapp number={number}/>
                </div>
              </div>
          </p>
          <p className="car">
            
          </p>
        </div>
        <hr/>
        <div className="line3">
          <img src={photo} alt="img" className="profile"/>
          <p className="name">{name}</p>
        </div>
        </Box>
        </CardContent>
    </Card>
    );
};

export default PropertyCard;