import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Settings } from './containers/settings/Settings';
import { Playground } from './containers/playground/Playground';
import { WinnerDisplay } from './components/winnerdisplay/WinnerDisplay';
import styles from './App.module.css';

import { appStore } from './store/appStore';
import { BotPlayer } from './libs/BotPlayer';
const store = new appStore();

export const App = observer( class extends Component {
  init = false;
  bot = null;
  componentDidUpdate() {
    if (store.player && !this.init) {
      this.init = true;
      this.bot = new BotPlayer(store);
      this.bot.init();

    } else if (store.player && this.init && store.playerMove) {
      this.bot.move();
    }
  }

  handlerReset = () => {
    this.bot = null;
    this.init = false;
    store.resetPlayer();
  };

  handlerMove = id => {
    if (store.player) {
      store.makeMove(id);
      this.bot.saveOpponentMove(id);
    }
  };

  render () {
    return (
      <div className='container'>
        <Settings player={ store.player } setPlayer={ store.setPlayer } />
        {
          store.winner
            ? <WinnerDisplay player={ store.winner } win={ store.winner === store.player } />
            : <Playground active={ !!store.player } matrix={ store.matrix } makeMove={ this.handlerMove } move={ store.move } />
        }
        <button className={ `btn btn-danger ${styles['btn-reset']}` } onClick={ this.handlerReset }>Reset</button>
      </div>
    );
  }
});