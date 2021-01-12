import { action, observable, makeObservable } from 'mobx';

export class appStore {
  winnerComb = [
    ['a1', 'b1', 'c1'],
    ['a2', 'b2', 'c2'],
    ['a3', 'b3', 'c3'],
    ['a1', 'a2', 'a3'],
    ['b1', 'b2', 'b3'],
    ['c1', 'c2', 'c3'],
    ['a1', 'b2', 'c3'],
    ['c1', 'b2', 'a3'],
  ];
  playerMove = false;

  // observable vars
  player = false;
  initialMatrix = {
    a1: false, b1: false, c1: false,
    a2: false, b2: false, c2: false,
    a3: false, b3: false, c3: false
  };
  matrix = this.initialMatrix;
  move = false;
  winner = false;

  constructor () {
    makeObservable(this, {
      player: observable,
      matrix: observable,
      move: observable,
      winner: observable,
      setPlayer: action,
      resetPlayer: action,
      makeMove: action,
      setwinner: action
    });
  }

  setPlayer = name => this.player = name;
  setwinner = winner => this.winner = winner;
  resetPlayer = () => {
    this.player = false;
    this.matrix = this.initialMatrix;
    this.winner = false;
  }
  makeMove = (id, player = false) => {
    if (id && !this.matrix[id]) {
      this.move = !this.move;
      this.matrix[id] = {cross: 'fa-times', zero: 'fa-circle-o'}[player || this.player];
      if (!player) this.playerMove = true;
      else this.playerMove = false;
    }
  }
}