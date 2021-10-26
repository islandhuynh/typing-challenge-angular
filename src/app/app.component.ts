import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  typedInput = '';
  
  title = 'typing-challenge';
  phrases = [
    "I began to have an idea of my life, not as the slow shaping of achievement to fit my preconceived purposes, but as the gradual discovery and growth of a purpose which I did not know.",
    "I just never let anything bother me, man. I know myself really well. Nobody's opinion of me can shake my opinion of myself.",
    "Any reviewer who expresses rage and loathing for a novel is preposterous. He or she is like a person who has put on full armor and attacked a hot fudge sundae."
  ];

  index = Math.floor(Math.random() * this.phrases.length);

  phrase = this.phrases[this.index]

  onChangeUserInput(value: string) {
    this.typedInput = value;
  }

  characterComparison(generatedLetter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return 'pending';
    }

    return enteredLetter === generatedLetter ? 'correct' : 'incorrect';
  }
}
