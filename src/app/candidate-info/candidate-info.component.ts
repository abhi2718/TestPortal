import { Component } from '@angular/core';
import { DataService } from '../../services/index.service';

@Component({
  selector: 'app-candidate-info',
  templateUrl: './candidate-info.component.html',
  styleUrls: ['./candidate-info.component.css']
})
export class CandidateInfoComponent {
constructor(private dataService: DataService) { }
  ngOnInit() {
    this.dataService.fetchData()
    .subscribe((data:any) => {
      console.log(data)
    })
  }
}
