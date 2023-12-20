import React from 'react';
const styles = {
    width: '80%',
    height: '70%',
    overflowY: 'scroll'
} 

const Scroll = (props) => {
    return (
        <div style={styles}>
            {props.children}
        </div>
    )
}

export default Scroll;
