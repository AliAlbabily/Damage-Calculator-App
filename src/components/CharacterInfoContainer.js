import React from 'react';
import styled from "styled-components";
import CharacterStats from './CharacterStats';
import BuildSelector from './BuildSelector';
import MonsterSelector from './MonsterSelector';

const Container = styled.div`
    background-color: #e4a1c35c;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    border-radius: 5px;
    height: 450px;
    width: 250px;
`;

const Title = styled.h3`
    text-align: center;
    margin-top: 5px;
    margin-bottom: 10px;
    color: #FFFFFF;
    text-shadow: #474747 2px 2px 2px;
`;

function CharacterInfoContainer(props) {

    return (
        <Container>
            <Title>{props.name}</Title>
            <CharacterStats stats={props.stats} />
            {props.displayBuildSelector === true &&
                <BuildSelector updateCharacterStats={props.updateCharacterStats} />
            }
            {props.displayMonsterSelector === true &&
                <MonsterSelector updateCharacterStats={props.updateCharacterStats} />
            }
        </Container>
    );
}

export default CharacterInfoContainer;