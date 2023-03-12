import { Component } from '@angular/core';
import { DataService } from '../../services/index.service';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent {
  constructor(private dataService: DataService) {}
  userInfo: any;
  score: number = 0;
  answer: any[] = [];
  i: number = 0;

  ngOnInit() {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo')!);
  }

  questionList: any[] = [
    {
      _id: '1',
      question:
        'Which technology is used for server-side scripting in the MERN stack?',
      option: ['PHP', 'Node.js', 'Swift', 'C#'],
      answer: 'Node.js',
    },
    {
      _id: '2',
      question:
        'Which technology is used for building the user interface in the MERN stack?',
      option: ['React.js', 'Flutter', 'MongoDB', 'Express.js'],
      answer: 'React.js',
    },
    {
      _id: '3',
      question:
        'Which method is used to add elements to the end of an array in JavaScript?',
      option: ['push()', 'slice()', 'split()', 'unpop()'],
      answer: 'push()',
    },
    {
      _id: '4',
      question:
        'Which method is used to remove the last element from an array in JavaScript?',
      option: ['filter()', 'unshift()', 'shift()', 'pop()'],
      answer: 'pop()',
    },
    {
      _id: '5',
      question:
        'How do you add a new property to an existing object in JavaScript?',
      option: [
        'Using the spread operator (...)',
        'Using the Object.create() method',
        'Using the Object.assign() method',
        'Using the Object.keys() method',
      ],
      answer: 'Using the Object.keys() method',
    },
  ];
  currentQuestion: any = this.questionList[this.i];
  onRadioClick(question: any, answer: any): void {
    if (question.answer === answer) {
      this.score = this.score + 2;
    }
    const isAnswerExist = this.answer.find(
      (item: any) => item._id === question._id
    );
    if (isAnswerExist) {
      const newAnswerArray = this.answer.map((item: any) => {
        if (item._id === question._id) {
          return { ...item, answer };
        }
        return item;
      });
      this.answer = newAnswerArray;
    } else {
      this.answer.push({
        _id: question._id,
        answer,
      });
    }
  }

  setNextQuestion() {
    this.i = this.i + 1;
    this.currentQuestion = this.questionList[this.i];
  }

  handleSubmit() {
    this.dataService
      .createResult({ score: this.score, userRef: this.userInfo._id })
      .subscribe((data: any) => {
        window.location.href = `${window.location.origin}/result`;
      });
  }
}
