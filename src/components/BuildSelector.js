import React, { useState } from 'react';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import DialogComponent from './DialogComponent';

function BuildSelector(props) {

    const builds = {
        warrior: [
            { statName: 'HP', statValue: 500, statMultiplier: 10 },
            { statName: 'ATK', statValue: 50, statMultiplier: 10 },
            { statName: 'MAG', statValue: 50, statMultiplier: 10 },
            { statName: 'DEF', statValue: 50, statMultiplier: 10 },
            { statName: 'SPR', statValue: 50, statMultiplier: 10 }],
        paladin: [
            { statName: 'HP', statValue: 400, statMultiplier: 10 },
            { statName: 'ATK', statValue: 40, statMultiplier: 10 },
            { statName: 'MAG', statValue: 40, statMultiplier: 10 },
            { statName: 'DEF', statValue: 40, statMultiplier: 10 },
            { statName: 'SPR', statValue: 40, statMultiplier: 10 }],
        dragoon: [
            { statName: 'HP', statValue: 300, statMultiplier: 10 },
            { statName: 'ATK', statValue: 30, statMultiplier: 10 },
            { statName: 'MAG', statValue: 30, statMultiplier: 10 },
            { statName: 'DEF', statValue: 30, statMultiplier: 10 },
            { statName: 'SPR', statValue: 30, statMultiplier: 10 }],
        healer: [
            { statName: 'HP', statValue: 200, statMultiplier: 10 },
            { statName: 'ATK', statValue: 20, statMultiplier: 10 },
            { statName: 'MAG', statValue: 20, statMultiplier: 10 },
            { statName: 'DEF', statValue: 20, statMultiplier: 10 },
            { statName: 'SPR', statValue: 20, statMultiplier: 10 }],
        archmage: [
            { statName: 'HP', statValue: 150, statMultiplier: 10 },
            { statName: 'ATK', statValue: 15, statMultiplier: 10 },
            { statName: 'MAG', statValue: 15, statMultiplier: 10 },
            { statName: 'DEF', statValue: 15, statMultiplier: 10 },
            { statName: 'SPR', statValue: 15, statMultiplier: 10 }]
    }

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