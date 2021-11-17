import React, { useState } from 'react';
import { builds } from "../data/builds-data";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import DialogComponent from './DialogComponent';

function BuildSelector(props) {

    function getBuild(buildValue) {
        if(buildValue === 'warrior') {
            return builds.warrior
        }
        else if(buildValue === 'paladin') {
            return builds.paladin
        }
        else if(buildValue === 'dragoon') {
            return builds.dragoon
        }
        else if(buildValue === 'healer') {
            return builds.healer
        }
        else if(buildValue === 'archmage') {
            return builds.archmage
        }
    }

    const [build, setBuild] = useState('');

    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        const chosenBuild = event.target.value
        setBuild(chosenBuild)
        if (chosenBuild === 'custom') {
            handleClickOpen()
        } else { // update character stats according to chosen build
            const buildArr = getBuild(chosenBuild)
            props.updateCharacterStats(buildArr)
        }
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", mt: 3}}>
            <FormControl sx={{width: 200}}>
                <InputLabel id="demo-simple-select-label">Select build</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={build}
                    label="Select build"
                    onChange={handleChange}
                >
                <MenuItem value={'custom'}>Custom build</MenuItem>
                <MenuItem value={'warrior'}>Warrior</MenuItem>
                <MenuItem value={'paladin'}>Paladin</MenuItem>
                <MenuItem value={'dragoon'}>Dragoon</MenuItem>
                <MenuItem value={'healer'}>Healer</MenuItem>
                <MenuItem value={'archmage'}>Archmage</MenuItem>
                </Select>
            </FormControl>
            <DialogComponent open={open} onClose={handleClose} updateCharacterStats={props.updateCharacterStats} />
        </Box>
    );
}

export default BuildSelector;