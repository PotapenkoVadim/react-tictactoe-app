import React, { Component } from 'react';
import styles from './Playground.module.css';
import { PlayerIcon } from '../../components/playericon/PlayerIcon';

export class Playground extends Component {
  render () {
    return (
      <div className='row'>
        <div className='col'>
          <table className={ `${styles['playground']} ${ !this.props.active && styles['disabled']}` }>
            <tbody>
              <tr>
                <td
                  onClick={ () => this.props.makeMove('a1') }
                  className={ styles['cell'] }
                >
                  <PlayerIcon move={ this.props.move } icon={ this.props.active && this.props.matrix['a1'] } />
                </td>

                <td
                  onClick={ () => this.props.makeMove('b1') }
                  className={ styles['cell'] }
                >
                  <PlayerIcon move={ this.props.move } icon={ this.props.active && this.props.matrix['b1'] } />
                </td>

                <td
                  onClick={ () => this.props.makeMove('c1') }
                  className={ styles['cell'] }
                >
                  <PlayerIcon move={ this.props.move } icon={ this.props.active && this.props.matrix['c1'] } />
                </td>
              </tr>

              <tr>
                <td
                  onClick={ () => this.props.makeMove('a2') }
                  className={ styles['cell'] }
                >
                  <PlayerIcon move={ this.props.move } icon={ this.props.active && this.props.matrix['a2'] } />
                </td>

                <td
                  onClick={ () => this.props.makeMove('b2') }
                  className={ styles['cell'] }
                >
                  <PlayerIcon move={ this.props.move } icon={ this.props.active && this.props.matrix['b2'] } />
                </td>

                <td
                  onClick={ () => this.props.makeMove('c2') }
                  className={ styles['cell'] }
                >
                  <PlayerIcon move={ this.props.move } icon={ this.props.active && this.props.matrix['c2'] } />
                </td>
              </tr>

              <tr>
                <td
                  onClick={ () => this.props.makeMove('a3') }
                  className={ styles['cell'] }
                >
                  <PlayerIcon move={ this.props.move } icon={ this.props.active && this.props.matrix['a3'] } />
                </td>

                <td
                  onClick={ () => this.props.makeMove('b3') }
                  className={ styles['cell'] }
                >
                  <PlayerIcon move={ this.props.move } icon={ this.props.active && this.props.matrix['b3'] } />
                </td>

                <td
                  onClick={ () => this.props.makeMove('c3') }
                  className={ styles['cell'] }
                >
                  <PlayerIcon move={ this.props.move } icon={ this.props.active && this.props.matrix['c3'] } />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}