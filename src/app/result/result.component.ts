import { Component } from '@angular/core';
import { DataService } from '../../services/index.service';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  constructor(private dataService: DataService) { }
  score: any[] = [];
  ngOnInit() {
    this.dataService
    .fetchResult()
      .subscribe((data: any) => {
      console.log(data);
      this.score = data;
    });
  }

}
