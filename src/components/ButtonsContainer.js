import React from 'react';
import styled from "styled-components";
import Button from '@mui/material/Button';

const Container = styled.div`
    background-color: #e4a1c35c;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    border-radius: 5px;
    height: 450px;
    width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

function ButtonsContainer(props) {
    return (
        <Container>
            <Button 
                variant="contained" 
                color="secondary" 
                style={{maxWidth: '200px', maxHeight: '50px', minWidth: '200px', minHeight: '50px', marginBottom: '20px'}}
                onClick={() => {
                    props.attackMonster(props.playerStats)
                }}>
                    Player Attacks
            </Button>
            <Button 
                variant="contained" 
                color="secondary"
                style={{maxWidth: '200px', maxHeight: '50px', minWidth: '200px', minHeight: '50px'}}
                onClick={() => {
                    props.attackPlayer(props.enemyStats, props.playerStats)
                }}>
                    Monster Attacks
            </Button>
        </Container>
    );
}

export default ButtonsContainer;