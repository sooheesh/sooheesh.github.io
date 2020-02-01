import React from 'react';
import styles from './styles.js';
import gStyles from '../styles';

function ThreeDigitNumber({number}) {
    const thirdDigit = Math.floor(number / 100);
    const secondDigit = Math.floor(number / 10);
    const firstDigit = Math.floor(number % 10);

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div style={{...styles.size, ...styles[`number${thirdDigit}`], ...gStyles.image}}/>
            <div style={{...styles.size, ...styles[`number${secondDigit}`], ...gStyles.image}}/>
            <div style={{...styles.size, ...styles[`number${firstDigit}`], ...gStyles.image}}/>
        </div>
    )
}

export default ThreeDigitNumber