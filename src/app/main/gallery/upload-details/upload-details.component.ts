import { GalleryService } from './../../../service/gallery.service';
import { Component, Input, OnInit } from '@angular/core';
import { FileUpload } from 'src/app/models/file-upload';

@Component({
  selector: 'app-upload-details',
  templateUrl: './upload-details.component.html',
  styleUrls: ['./upload-details.component.sass']
})
export class UploadDetailsComponent implements OnInit {

  @Input() fileUpload: FileUpload;

  constructor(private uploadService: GalleryService) { }

  ngOnInit(): void {
  }

  deleteFileUpload(fileUpload): void {
    this.uploadService.deleteFile(fileUpload);
  }

}
