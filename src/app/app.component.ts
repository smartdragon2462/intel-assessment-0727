import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userList = [];
  submit(form) {
    if (
      form.status === 'INVALID' ||
      !form.value.firstname ||
      !form.value.firstname
    )
      return;
    this.userList.push(form.value);
    form.reset();
  }
  delete(index) {
    this.userList.splice(index, 1);
  }
}
