import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.scss'],

})

export class MyformComponent implements OnInit {
 myForm!: FormGroup



  constructor(private fb:FormBuilder ) {}

  ngOnInit(): void {

  }

  login() {
    this.myForm = this.fb.group({
      email: ['',[Validators.required]],
      password: ['',[Validators.required]],


    })

  }







}
