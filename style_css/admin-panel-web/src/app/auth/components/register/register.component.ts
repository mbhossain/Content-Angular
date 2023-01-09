import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public name: string = '';

  constructor(
    private _mdr: MatDialogRef<RegisterComponent>
    , @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.name = data.name;
  }

  CloseDialog() {
    this._mdr.close(false)
  }

}
