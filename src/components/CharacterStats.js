import React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function CharacterStats(props) {
    return (
        <TableContainer>
            <Table sx={{ minWidth: 250 }} size="small">
                <TableHead sx={{ background: '#d0c0dc' }}>
                    <TableRow>
                        <TableCell sx={{ fontWeight: 'bolder' }}>Stat</TableCell>
                        <TableCell align="right" sx={{ fontWeight: 'bolder' }}>Value</TableCell>
                        <TableCell align="right" sx={{ fontWeight: 'bolder' }}>Multiplier</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody sx={{ background: '#d0c0dc' }}>
                    {props.stats.map((row) => (
                        <TableRow key={row.statName} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">{row.statName}</TableCell>
                            <TableCell align="right">{row.statValue}</TableCell>
                            <TableCell align="right">{row.statMultiplier}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default CharacterStats;