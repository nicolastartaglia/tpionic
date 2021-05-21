import { Component, OnInit, NgZone } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../classes/user';
import { Observable, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  ionicForm: FormGroup;

  // users: Array<User> = new Array<User>();

  user: User = new User();

  users: Observable<Array<User>>

  refresUsers = new BehaviorSubject<boolean>(true);

  constructor(private formBuilder: FormBuilder, private ngZone: NgZone, private router: Router, private userService: UserService, private route: ActivatedRoute) { }


  ngOnInit() {
    this.users = this.refresUsers.pipe(switchMap(_ => this.userService.getAllUsers()));
    this.ionicForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  deleteUser(userId) {
    console.log(userId);
    this.userService.deleteUser(userId).subscribe(data => {
      console.log(data);
      this.refresUsers.next(true);
    });
  }

  get errorControl() {
    return this.ionicForm.controls;
  }

  addUser() {
    this.userService.addUser(this.user).subscribe(data => {
      console.log(data);
      this.refresUsers.next(true);
    })
  }
  

}
