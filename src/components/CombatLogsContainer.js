import React, { useEffect, useRef } from 'react';
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
    text-shadow: #474747 1px 1px 0px;
    font-family: monospace;
`;

function CombatLogsContainer(props) {
    let itemCounter = 0;

    const messagesEndRef = useRef(null) // create a refernce for the "div" element within the "container" element

    const scrollToBottom = () => { // the function that does the "scroll to bottom"
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(scrollToBottom, [props.damageLogs]) // "useEffect" calls "scrollToBottom" only on a certain state change (second argument)

    return (
        <Container>
            {(props.damageLogs || []).map(string => {
                itemCounter++
                let itemKey = "itemKey" + itemCounter
                return <Text key={itemKey}>{string}</Text>
            })}
            <div ref={messagesEndRef} /> {/* the element to scroll to when a new message arrives */}
        </Container>
    );
}

export default CombatLogsContainer;