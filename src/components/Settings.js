import React from 'react';
import Button from '@mui/material/Button';
import {MenuItem, TextField} from "@mui/material";
import categories from "../data/Categories";
const Settings = () => {
    return (
        <div>
            <div>
                <TextField
                    label="Enter Your Name"
                    variant="outlined"/>
                <TextField
                    select
                    label="Select Category"
                    variant="outlined"
                >
                    {
                        categories.map((data,index) => (
                            <MenuItem key={data.value} value={data.category}>
                                {data.category}
                            </MenuItem>
                        ))
                    }
                </TextField>
                <TextField
                    select
                    label="Select difficulty"
                    id="difficulty-degree"
                    variant="outlined"
                >
                    <MenuItem key="easy" value="easy">Easy</MenuItem>
                    <MenuItem key="medium" value="medium">Medium</MenuItem>
                    <MenuItem key="hard" value="hard">Hard</MenuItem>
                </TextField>
            </div>
            <Button variant="outlined">START QUIZ</Button>
        </div>
    );
}

export default Settings;