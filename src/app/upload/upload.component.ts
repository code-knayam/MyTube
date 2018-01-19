import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  uploadForm: FormGroup;

  constructor( private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.uploadForm = new FormGroup({
      video_title: new FormControl( null, [Validators.required] ),
      video_desc: new FormControl( null, [Validators.required] ),
      video_url: new FormControl( null, [Validators.required])
    });
  }

  onSubmit() {
    console.log('Form Submitted');
    this.router.navigate(['/']);
  }

}
