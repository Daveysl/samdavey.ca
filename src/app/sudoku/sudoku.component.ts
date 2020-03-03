import { Component } from '@angular/core';
import { Sudoku, Cell } from './sudoku.model';
import { Number } from './numbers.model';

@Component({
  selector: 'app-sudoku',
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.scss']
})
export class SudokuComponent {

  public sudoku :Sudoku;
  
  public numbers: Number[];
  private selectedNum: number = 0;

  constructor () {
    this.sudoku = this.newBoard();
    this.formatBoard();
    this.numbers = this.createNumbers();
  }

  //* -------------------------------------------- CHECK BOARD
  public formatBoard():void {
    let boxes: Cell[][] = this.sudoku.boxes;
    let rows: Cell[][] = this.sudoku.rows;
    let cols: Cell[][] = this.sudoku.cols;
    let rand:number = this.getRandom(1, 9);

    for (let x=0; x<9; x++) { // let x represent the number of the boxes[x] in boxes or rows or cols
      // go through boxes
      // create a random number
      // if random number is in boxes, rows, or cols => boxes.add(0)
      // if not, add random number to box, row and col of cell

      boxes[x].forEach( cell => {
        rand = this.getRandom(1, 9);

        for (let y=0; y<9; y++) { 
          if (boxes[x][y].value == rand || rows[cell.row][y].value == rand || cols[cell.col][y].value == rand) {
            cell.value = -1;
            break;
          }
        }
        //console.log(cell.value)
        cell.value = cell.value==-1? 0 : rand;
      });
    }
  }

  //* -------------------------------------------- NEW BOARD
  public newBoard(): Sudoku {
    let data: Sudoku = {
      boxes: [[],[],[],[],[],[],[],[],[]],
      rows: [[],[],[],[],[],[],[],[],[]],
      cols: [[],[],[],[],[],[],[],[],[]]
    };

    // initialize as 0
    let c: number = 1;

    // sudoku
    console.log("row, col")
    for (let b=0; b<9; b++) { // box id
        for (let myrow=0; myrow<3; myrow++) { // row id
            for (let mycol=0; mycol<3; mycol++) { // column id
              
              let cell: Cell = { 
                id: c,
                box: b,
                row: this.getCellRow(myrow, b),
                col: this.getCellCol(mycol, b),
                value: 0,
                pencils: [],
                highlighted: false,
                clicked: false
              }

              if (c < 9) c++; else c=0;
              
              data.boxes[cell.box].push(cell); // add cell to current box for display
              data .cols[cell.col].push(cell);
              data .rows[cell.row].push(cell);
            }
        }
    }
    return data;
  }

  public getCellRow(row:number, b:number):number {
    return (b<3) ? row : (b<6) ? row+3 : row+6;
  }

  public getCellCol(col:number, b:number):number {
    return (b%3==0) ? col : (b%3==1) ? col+3 : col+6;
  }

  //* ------------------------------------------- CREATE NUMBERS
  public createNumbers(): Number[] {
    let numbers: Number[] = [];
    for (let n=0; n <=9; n++) {
      let number: Number = {
        id: n,
        value: n+"",
        selected: false
      }
      if (n == 0) number.value = "X";

      numbers.push(number);
    }
    numbers.push(numbers.shift());
    return numbers;

  }

  //* --------------------------------------------NUMBER CLICKED
  public numberClicked(myNum:Number):void {

    this.selectedNum = (myNum.id < 10) ? myNum.id : 0;

    // ----------------------

    this.numbers.forEach( num => {
      if (num.id != myNum.id)  num.selected = false;
    });
      
    myNum.selected = !myNum.selected;
    if (myNum.selected == false) this.selectedNum = 0;

    console.log(this.selectedNum);

    // ----------------------

    this.sudoku.boxes.forEach(box => {
      box.forEach(cell => {

        if (cell.value != this.selectedNum || this.selectedNum == 0) cell.highlighted = false;
        else {
          cell.highlighted = true;
          
        }
      });
    })
  }

  //* ------------------------------------------ CELL CLICKED
  public cellClicked(myCell: Cell):void {
    
    this.sudoku.boxes.forEach(box => {
      box.forEach(cell => {
        cell.clicked = false
        cell.highlighted = false;
      });
    });


    myCell.clicked = !myCell.clicked;

    // ----------------------

    if (this.numbers.find(num => num.selected == true)) {
      myCell.value = this.selectedNum;

    } else {
      this.selectedNum = myCell.value;
    }

    // ----------------------

    this.sudoku.boxes.forEach(box => {
      box.forEach(cell => {

        if (this.selectedNum != 0 && cell.value == this.selectedNum && !cell.clicked) cell.highlighted = true;
        if (cell.value == myCell.value) cell.highlighted == true;
        
      });
    });
  }

  //* ------------------------------------------------------- GET RANDOM NUM
  private getRandom(min:number, max:number):number {
    return Math.floor(Math.random() * max) + min;
  }

}

