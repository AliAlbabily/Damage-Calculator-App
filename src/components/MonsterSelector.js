import React, { useState } from 'react';
import { monsters } from "../data/monsters-data";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function MonsterSelector(props) {

    function getMonsterData(value) {
        if(value === 'titan') {
            return monsters.titan
        }
        else if(value === 'wizard') {
            return monsters.wizard
        }
        else if(value === 'shinobi') {
            return monsters.shinobi
        }
        else if(value === 'gundam') {
            return monsters.gundam
        }
        else if(value === 'human') {
            return monsters.human
        }
    }

    const [monster, setMonster] = useState('shinobi');

    const handleChange = (event) => {
        const chosenMonster = event.target.value
        setMonster(chosenMonster)
        const monsterArr = getMonsterData(chosenMonster)
        props.updateCharacterStats(monsterArr)
    }

    return (
        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", mt: 3}}>
            <FormControl sx={{width: 200}}>
                <InputLabel id="monster-select-label">Select monster</InputLabel>
                <Select
                    labelId="monster-select-label"
                    id="monster-select"
                    value={monster}
                    label="Select monster"
                    onChange={handleChange}
                >
                <MenuItem value={'titan'}>Titan</MenuItem>
                <MenuItem value={'wizard'}>Wizard</MenuItem>
                <MenuItem value={'shinobi'}>Shinobi</MenuItem>
                <MenuItem value={'gundam'}>Gundam</MenuItem>
                <MenuItem value={'human'}>Human</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}

export default MonsterSelector;