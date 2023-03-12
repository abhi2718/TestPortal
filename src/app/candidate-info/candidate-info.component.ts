import { Component } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import { DataService } from '../../services/index.service';

@Component({
  selector: 'app-candidate-info',
  templateUrl: './candidate-info.component.html',
  styleUrls: ['./candidate-info.component.css']
})
export class CandidateInfoComponent {
  constructor(private dataService: DataService) { }
  ngOnInit() {
  }
  
formGroup = new FormGroup(
    {
      name: new FormControl(),
      email: new FormControl(),
    },
  )
  submitForm() {
    const { email, name } = this.formGroup.value;
    if (!name) {
     return alert("Please enter a valid name !");
    }
    if (!email) {
     return alert("Please enter a valid email !");
    }
    this.dataService.createUser({ email, name })
      .subscribe((data: any) => {
      localStorage.setItem("userInfo",JSON.stringify(data))
      window.location.href = `${window.location.origin}/test`;
    })
  }
}
