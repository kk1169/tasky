import { Component, OnInit, Input } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { UsersService } from 'src/app/shared/users/users.service';
import { Users } from './users';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  usersForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UsersService
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.usersForm = this.fb.group({
      FirstName: ['', Validators.required ],
      LastName: ['', Validators.required ],
      Mobile: ['', Validators.required ]
    });
  }

  onSubmit() {

  }

}
