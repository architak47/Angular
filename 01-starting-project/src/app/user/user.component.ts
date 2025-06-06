import { Component, computed, Input, input } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length) 

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  
  // Decorator based approach
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;

  // Signal based approach
  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => {
  //   return "assets/users/" + this.avatar;
  // })

  get imagePath() {
    return "assets/users/" + this.avatar;
  }

  onSelectUser() {}

}
