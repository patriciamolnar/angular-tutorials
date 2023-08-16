import { Component, computed, effect, signal } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  price = signal(0);
  percent = signal(0);
  tip = computed(() => this.price() * this.percent() / 100);
  color = computed(() => {
    if(this.percent() < 5) {
      return "red";
    } else if(this.percent() >= 5 && this.percent() <= 10) {
      return "orange";
    } else {
      return "primary"; 
    }
  })

  count = signal(0);
  person = signal({
    firstname: "Gandalf",
    title: "the Grey"
  });

  personFullName = computed(() => `${this.person().firstname} ${this.person().title}`);
  answerCorrect = computed(() => this.personFullName().toLowerCase() === 'gandalf the white')

  constructor() {
    /**
     * runs at least once, and whenever percent gets changed
     * gets destroyed automatically when component is destroyed
     * effect runs asynchronously
     */
    effect(() => {
      if(this.percent() < 10) {
        console.log("someone's a bit stingy"); 
      } else if(this.percent() > 10 && this.percent() <= 20) {
        console.log("that's a good tip");
      } else {
        console.log("wow, that's generous");
      }
    }); 
  }

  changeSignal(name: "price" | "percent", value: string) {
    const num = Number(value);
    if (isNaN(num)) {
      return;
    } else {
      this[name].set(num);
    }
  }

  incrementCount() {
    this.count.update((c) => c + 1);
  }

  changeObjectSignal(key: "firstname" | "title", value: string) {
    this.person.mutate(person => person[key] = value)
  }
}
