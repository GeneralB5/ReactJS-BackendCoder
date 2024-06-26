import { createTheme } from "@mui/material";

const themeDuration = createTheme({
    transitions:{
        duration:{
            shortest: 150,
            shorter: 200,
            short: 250,
            standard: 300,
            complex: 375,
            enteringScreen: 225,
            leavingScreen: 195,}
    }
})
