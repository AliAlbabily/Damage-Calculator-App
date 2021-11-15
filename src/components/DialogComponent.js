import React, { useRef } from 'react'

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

function DialogComponent(props) {

  const hpValueRef = useRef('') // creating a refernce for TextField Component
  const atkValueRef = useRef('')
  const magValueRef = useRef('')
  const defValueRef = useRef('')
  const sprValueRef = useRef('')

  return (
    <div>
      <Dialog open={props.open} onClose={props.onClose}>
        <DialogTitle sx={{mx: 'auto'}}>Edit stats</DialogTitle>
        <DialogContent>
          <FormControl sx={{ gap: 2, mt: 1 }}>
            <TextField inputRef={hpValueRef} label="Stat value: HP" type="number" InputLabelProps={{shrink: true}} defaultValue={0}/>
            <TextField inputRef={atkValueRef} label="Stat value: ATK" type="number" InputLabelProps={{shrink: true}} defaultValue={0}/>
            <TextField inputRef={magValueRef} label="Stat value: MAG" type="number" InputLabelProps={{shrink: true}} defaultValue={0}/>
            <TextField inputRef={defValueRef} label="Stat value: DEF" type="number" InputLabelProps={{shrink: true}} defaultValue={0}/>
            <TextField inputRef={sprValueRef} label="Stat value: SPR" type="number" InputLabelProps={{shrink: true}} defaultValue={0}/>
          </FormControl>
        </DialogContent>
        <DialogActions sx={{mx: 'auto'}}>
          <Button 
            sx={{mb: 2}} 
            variant="contained" 
            color="secondary"
            onClick={() => {
              props.onClose();
              const newPlayerDataArr = [
                { statName: 'HP', statValue: hpValueRef.current.value, statMultiplier: 0 },
                { statName: 'ATK', statValue: atkValueRef.current.value, statMultiplier: 0 },
                { statName: 'MAG', statValue: magValueRef.current.value, statMultiplier: 0 },
                { statName: 'DEF', statValue: defValueRef.current.value, statMultiplier: 0 },
                { statName: 'SPR', statValue: sprValueRef.current.value, statMultiplier: 0 }
              ];
              props.updateCharacterStats(newPlayerDataArr);
            }}>
              Confirm stats
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DialogComponent;