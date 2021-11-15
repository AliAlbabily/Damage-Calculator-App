import React, { useState } from 'react';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import DialogComponent from './DialogComponent';

function BuildSelector(props) {

    const builds = {
        challenger: [
            { statName: 'HP', statValue: 500, statMultiplier: 10 },
            { statName: 'ATK', statValue: 50, statMultiplier: 10 },
            { statName: 'MAG', statValue: 50, statMultiplier: 10 },
            { statName: 'DEF', statValue: 50, statMultiplier: 10 },
            { statName: 'SPR', statValue: 50, statMultiplier: 10 }],
        shiny: [
            { statName: 'HP', statValue: 400, statMultiplier: 10 },
            { statName: 'ATK', statValue: 40, statMultiplier: 10 },
            { statName: 'MAG', statValue: 40, statMultiplier: 10 },
            { statName: 'DEF', statValue: 40, statMultiplier: 10 },
            { statName: 'SPR', statValue: 40, statMultiplier: 10 }],
        mysterious: [
            { statName: 'HP', statValue: 300, statMultiplier: 10 },
            { statName: 'ATK', statValue: 30, statMultiplier: 10 },
            { statName: 'MAG', statValue: 30, statMultiplier: 10 },
            { statName: 'DEF', statValue: 30, statMultiplier: 10 },
            { statName: 'SPR', statValue: 30, statMultiplier: 10 }],
        speedrunner: [
            { statName: 'HP', statValue: 200, statMultiplier: 10 },
            { statName: 'ATK', statValue: 20, statMultiplier: 10 },
            { statName: 'MAG', statValue: 20, statMultiplier: 10 },
            { statName: 'DEF', statValue: 20, statMultiplier: 10 },
            { statName: 'SPR', statValue: 20, statMultiplier: 10 }],
        finisher: [
            { statName: 'HP', statValue: 150, statMultiplier: 10 },
            { statName: 'ATK', statValue: 15, statMultiplier: 10 },
            { statName: 'MAG', statValue: 15, statMultiplier: 10 },
            { statName: 'DEF', statValue: 15, statMultiplier: 10 },
            { statName: 'SPR', statValue: 15, statMultiplier: 10 }],
        tank: [
            { statName: 'HP', statValue: 140, statMultiplier: 10 },
            { statName: 'ATK', statValue: 14, statMultiplier: 10 },
            { statName: 'MAG', statValue: 14, statMultiplier: 10 },
            { statName: 'DEF', statValue: 14, statMultiplier: 10 },
            { statName: 'SPR', statValue: 14, statMultiplier: 10 }],
        mage: [
            { statName: 'HP', statValue: 130, statMultiplier: 10 },
            { statName: 'ATK', statValue: 13, statMultiplier: 10 },
            { statName: 'MAG', statValue: 13, statMultiplier: 10 },
            { statName: 'DEF', statValue: 13, statMultiplier: 10 },
            { statName: 'SPR', statValue: 13, statMultiplier: 10 }],
    }

    function getBuild(buildValue) {
        if(buildValue === 'challenger') {
            return builds.challenger
        }
        else if(buildValue === 'shiny') {
            return builds.shiny
        }
        else if(buildValue === 'mysterious') {
            return builds.mysterious
        }
        else if(buildValue === 'speedrunner') {
            return builds.speedrunner
        }
        else if(buildValue === 'finisher') {
            return builds.finisher
        }
        else if(buildValue === 'tank') {
            return builds.tank
        }
        else if(buildValue === 'mage') {
            return builds.mage
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
                <MenuItem value={'challenger'}>The Challenger</MenuItem>
                <MenuItem value={'shiny'}>The Shiny</MenuItem>
                <MenuItem value={'mysterious'}>The Mysterious</MenuItem>
                <MenuItem value={'speedrunner'}>Speedrunner</MenuItem>
                <MenuItem value={'finisher'}>Finisher</MenuItem>
                <MenuItem value={'tank'}>Tank</MenuItem>
                <MenuItem value={'mage'}>Mage</MenuItem>
                </Select>
            </FormControl>
            <DialogComponent open={open} onClose={handleClose} updateCharacterStats={props.updateCharacterStats} />
        </Box>
    );
}

export default BuildSelector;