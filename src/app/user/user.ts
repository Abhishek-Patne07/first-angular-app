import { Component , EventEmitter, Input , Output , output} from '@angular/core';
import { type UserModel } from './user.model';


@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrls: ['./user.css']
})

export class User {
//  @Input({ required:true}) id!: string;
//  @Input({ required:true}) avatar!: string; 
//  @Input({ required:true}) name!: string;
@Input({required:true}) user!: UserModel;
@Input({required : true}) selected!: boolean;
 @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
   onSelectedUser(){
   this.select.emit(this.user.id);
}

}
