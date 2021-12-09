import { Typography, Box, Grid, TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper, IconButton, Tooltip, Button, } from '@mui/material'
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import { deepPurple, green, orange } from '@mui/material/colors'

import React from 'react'
import { makeStyles } from '@mui/styles'
import ListData from '../Components/ListData';

const useStyle = makeStyles({
    headingColor: {
        backgroundColor: deepPurple[400],
        color: "white"
    },
    addStuColor: {
        backgroundColor: green[400],
        color: "white"
    },
    stuListColor: {
        backgroundColor: orange[400],
        color: "white"
    },
    tableHeadCell: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16
    }
})

const Home = () => {

    const clasess = useStyle();
    return (
        <>

            <Grid container px={2}>
                <Grid item md={6} xs={12} px={4}>
                    <Box textAlign="center" p={2} mb={2} className={clasess.addStuColor}>
                        <Typography variant="h4">Add Student</Typography>
                    </Box>
                    <form noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} >

                                <TextField fullWidth label="Name" id="Name" required autoFocus name="Name" autoComplete="Name" />
                            </Grid>
                            <Grid item xs={12} >
                                <TextField fullWidth label="Email" id="Email" required autoFocus name="Email" autoComplete="Email" />
                            </Grid>

                        </Grid>
                        <Box m={3}>
                            <Button type="submit" variant="contained" fullWidth>Save</Button>
                        </Box>
                    </form>
                </Grid>
                <Grid item md={6} xs={12} px={4}>
                    <ListData />
                </Grid>
            </Grid>
        </>
    )
}

export default Home
