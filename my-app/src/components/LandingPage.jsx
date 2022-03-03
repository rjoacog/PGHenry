import React from "react";
import { Container, Button, Typography  } from "@mui/material";


export default function LandingPage() {

    return (
        <div>
            <Container>
            <Typography variant="h3" style={{
                textAlign: "center",
                marginTop:"100px"

            }}>Welcome to Ecommerce</Typography>
            <Button variant="contained" href="/home" style={{
                display:"flex",
                marginRight:"500px",
                marginLeft:"500px",
                marginTop:"50px"          
            }}>HOME</Button>
            </Container>
        </div>
    )
}