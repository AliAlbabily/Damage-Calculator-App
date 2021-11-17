import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    background-color: #e4a1c35c;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    border-radius: 5px;
    height: 200px;
    width: 825px;
    overflow-y: scroll; // for the vertical scrollbar
    padding: 10px;
`;

const Text = styled.span`
    color: white;
    display: block;
    text-shadow: #474747 2px 2px 2px
`; 

function CombatLogsContainer(props) {
    let itemCounter = 0;

    return (
        <Container>
            {(props.damageLogs || []).map(string => {
                itemCounter++
                let itemKey = "itemKey" + itemCounter
                return <Text key={itemKey}>{string}</Text>
            })}
        </Container>
    );
}

export default CombatLogsContainer;