import React from 'react';
import styles from './Playerside.module.css';
import { PlayerIcon } from '../playericon/PlayerIcon';

export const Playerside = ({ icon, checked, handler, name }) => (
  <div
    className={ `${styles['player-checkbox']} ${checked === name && styles['checked']}` }
    onClick={ () => handler(name) }
  >
    <PlayerIcon icon={ icon } />
  </div>
);