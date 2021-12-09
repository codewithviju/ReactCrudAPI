import { Typography, Box, Grid, Button } from '@mui/material'
import TextField from '@mui/material/TextField';
import { deepPurple, green, orange } from '@mui/material/colors'

import React, { useState, useEffect } from 'react'
import { makeStyles } from '@mui/styles'
import ListData from '../Components/ListData';
import axios from 'axios'

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

    // Insert Employees With API

    const [employee, setEmployee] = useState({
        name: "",
        email: ""
    });


    // Get Value From TextField And Set into The State

    function GetDatafromField(e) {
        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        })

        console.log(employee)

    }

    // When Form Submit And Store Data into The API

    async function OnFormSubmit(e) {
        e.preventDefault();

        try {
            await axios.post(`https://61b191eb3c954f001722aa01.mockapi.io/employees`, employee)

        }
        catch (error) {
            console.log(`Something Wrong.. Look At ${error}`)
        }
    }


    return (
        <>

            <Grid container px={2}>
                <Grid item md={6} xs={12} px={4}>
                    <Box textAlign="center" p={2} mb={2} className={clasess.addStuColor}>
                        <Typography variant="h4">Add Employees</Typography>
                    </Box>
                    <form noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} >

                                <TextField label="Name" id="Name" required autoFocus name="Name" autoComplete="Name" fullWidth onChange={e => GetDatafromField(e)} />
                            </Grid>
                            <Grid item xs={12} >
                                <TextField fullwidth label="Email" id="Email" required autoFocus name="Email" autoComplete="Email" fullWidth onChange={e => GetDatafromField(e)} />
                            </Grid>

                        </Grid>
                        <Box m={3}>
                            <Button type="submit" variant="contained" fullWidth onClick={e => OnFormSubmit(e)}>Save</Button>
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
