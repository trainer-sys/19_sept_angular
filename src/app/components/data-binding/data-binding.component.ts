import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

    // Properties
    playerName:string = "Virat"
    playerScore:number = 100

    totalRuns:number = 14675
    totalMatches:number = 302


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


}
