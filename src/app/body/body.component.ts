import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  public listWorld: string[] = ['Développeur', 'Front end','Blockchain Enthousiaste'];
  public worldToWrite: string = '';

  ngOnInit() {
    this._typingAnimation();
  }

  private _typingAnimation(): void {
    let currentWorldlength: number = 0;
    let currentLengthWorldList: number = 0;
    setInterval(() => {
      const letter: string = this.listWorld[currentLengthWorldList][currentWorldlength];
      this.worldToWrite += letter;
      currentWorldlength ++;
      if (currentWorldlength > this.listWorld[currentLengthWorldList].length) {
        this.worldToWrite = '';
        currentWorldlength = 0;
        if (currentLengthWorldList + 1 === this.listWorld.length) {
          currentLengthWorldList = 0;
        } else {
          currentLengthWorldList ++;
        }
      }
    }, 200);
  }
}
