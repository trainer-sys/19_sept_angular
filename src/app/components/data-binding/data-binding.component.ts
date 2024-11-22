import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

    // Properties
    playerName:string = "Virat"
    playerScore:number = 100

    totalRuns:number = 14675
    totalMatches:number = 302

    myURL = "https://www.google.co.in"

    disable = false

    myImageURL = "assets/mountain.png"

    name:string = ""

    // Methods
    calculateAverage(){
      return this.totalRuns / this.totalMatches
    }

    increaseScore(){
      this.totalRuns += 10
    }

    decreaseScore() {
      this.totalRuns -= 10
    }

    changeSiteURL() {
      this.myURL = "https://www.cricbuzz.com"
    }
}
