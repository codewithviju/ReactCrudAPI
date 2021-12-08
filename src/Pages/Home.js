import { Typography, Box, Grid, TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper, IconButton, Tooltip, TextField, Button } from '@mui/material'
import { deepPurple, green, orange } from '@mui/material/colors'
import VisibilityIcon from '@mui/icons-material/Visibility'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import React from 'react'
import { makeStyles } from '@mui/styles'

const useStyle = makeStyles({
    headingColor: {
        backgroundColor: deepPurple[400],
        color: "white"
    }
})

const Home = () => {

    const clasess = useStyle();
    return (
        <>
            <Box textAlign="center" className={clasess.headingColor} p={2}>
                <Typography variant="h2">Welcome To RV Technolabs</Typography>
            </Box>
            <Grid container >
                <Grid item md={6} xs={12}>
                    <h1>Add Students</h1>
                </Grid>
                <Grid item md={6} xs={12}>
                    <h1>Student Lists</h1>
                </Grid>
            </Grid>
        </>
    )
}

export default Home
