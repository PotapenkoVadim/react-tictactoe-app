import { diffArrays, intersecArrays } from './arrayFuncs';
export class BotPlayer {
  constructor (store) {
    this.store = store;
    this.player = { cross: 'zero', zero: 'cross' }[store.player];
    this.opponentCell = [];
    this.botCell = [];
  }

  init() {
    if (this.player === 'cross') {
      this.botCell.push('b2');
      this.store.makeMove('b2', this.player);
    } else return false;
  }

  move() {
    if (!this.store.winner) {
      let win = this.nextMove(this.botCell);
      if (win) {
        this.store.makeMove(win, this.player);
        this.isWin(this.botCell, this.player);
        return true;
      }

      let danger = this.nextMove(this.opponentCell);
      if (danger) {
        this.store.makeMove(danger, this.player);
        this.isWin(this.botCell, this.player);
        return true;
      }

      let ids = Object.keys(this.store.matrix);
      for (let i = 0; i < ids.length; i++) {
        if (!this.store.matrix[ids[i]]) {
          this.botCell.push(ids[i]);
          this.store.makeMove(ids[i], this.player);
          this.isWin(this.botCell, this.player);
          return true;
        }
      }
    }
  }

  nextMove(obj) {
    for (let i = 0; i < this.store.winnerComb.length; i++) {
      let difCell = diffArrays(this.store.winnerComb[i], obj);
      if (difCell.length === 1 && !this.store.matrix[difCell]) {
        this.botCell.push(difCell[0]);
        return difCell[0];
      }
    }
  }

  isWin(obj, player) {
    for (let i = 0; i < this.store.winnerComb.length; i++) {
      let interCell = intersecArrays(this.store.winnerComb[i], obj);
      if (interCell.length === 3) return this.store.setwinner(player);
    }
  }

  saveOpponentMove(move) {
    this.opponentCell.push(move);
    this.isWin(this.opponentCell, this.store.player);
  }
}