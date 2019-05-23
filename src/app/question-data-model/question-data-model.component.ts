
import { Component, OnInit ,Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-question-data-model',
  templateUrl: './question-data-model.component.html',
  styleUrls: ['./question-data-model.component.css']
})
export class QuestionDataModelComponent implements OnInit {

//   constructor(public dialogRef: MatDialogRef<QuestionDataModelComponent>,
//     @Inject(MAT_DIALOG_DATA) public data: any,


// ) {

// }
constructor(@Inject(MAT_DIALOG_DATA) public data: any,
public dialogRef: MatDialogRef<QuestionDataModelComponent>) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
