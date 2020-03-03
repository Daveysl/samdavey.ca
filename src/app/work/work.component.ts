import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent{

  public projects:Object[];

  constructor() {
    this.projects = [
      {
        title: "Angular 7 Sudoku Game",
        info: "This is my sudoku game I created over the summer, originally I created it in jQuery - but due to the size of the project, I moved to angular",
        src1: "sudoku.png",
        src2: "sudoku2.png",
        link: "../sudoku"
      },
      {
        title: "PHP (custom) Command-line Chess Game",
        info: "I created this project a few days after I first started learning PHP. I had a LOT of experience from programming my angular sudoku app. I was able to create the board in a day, then I created the actual chess game in 2 more days. After that work I kept going back and making small changes for a better user interface. I am incredibly proud of this project.",
        src1: "chess.png",
        src2: "chess2.png",
        link: "../chess"
      },
      {
        title: "jQuery Rock Paper Scissors",
        info: "This was a side project that I made for myself during my first year work experience. I was required to learn jQuery in order to create a web app for a client. I decided to learn the language by creating fun little web app games. This was really simple to create, the challenge was getting the result of both hands thrown and designing a clean UI for the simple app. I’m happy with the result of it, although it’s small, it helped me learn jQuery significantly.",
        src1: "jqueryRPSLS.png",
        src2: "jqueryRPSLS2.png",
        link: "https://jsfiddle.net/samcantcode/odr34u2e/"
      },
      {
        title: "jQuery Tic Tac Toe",
        info: "I created this small app during work experience as well. This was also used to help me learn jQuery in the span of about a week, I could work on it while waiting for the client to reply. The challenge for this app was the UI design and getting the app to check if a user has won. I was glad I was able to complete it, satisfied with the result, although I believe I’ve become a much better coder since then.",
        src1: "tictactoe1.png",
        src2: "tictactoe2.png",
        link: "https://jsfiddle.net/samcantcode/bdpzjy0k/"
      },
      {
        title: "Business Card",
        info: "This is a design for a future business card that I want to use to relay my contact information to potential employers. I wanted a design that sticks out, looks professional and I would be proud of.  It’s still in the process of finding the right materials to print on and some color changes to make it CMYK compatible.  I’m not done with the design yet, as there are always small details that I feel need changing, I’m always open to advice.",
        src1: "BusinessCard1.png",
        src2: "BusinessCard2.png",
        link: "../assets/images/businesscardFull.png"
      }
    ];
  }



}
