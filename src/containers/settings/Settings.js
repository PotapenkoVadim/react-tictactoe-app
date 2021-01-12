import React, { Component } from 'react';
import styles from './Settings.module.css';
import { Playerside } from '../../components/playerside/Playerside';

export class Settings extends Component {
  render () {
    return (
      <div className='row'>
        <div className='col'>
          <p className='text-center h4 mt-5'>{ (this.props.player && `Your side ${this.props.player}`) || 'Choose your side' }</p>
          <div className={ `${styles['playerside-container']} ${this.props.player && styles['hide']}` }>
            <Playerside checked={ this.props.player } icon='fa-times' name='cross' handler={ this.props.setPlayer } />
            <Playerside checked={ this.props.player } icon='fa-circle-o' name='zero' handler={ this.props.setPlayer } />
          </div>
        </div>
      </div>
    );
  }
}