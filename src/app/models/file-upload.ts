export class FileUpload {
  key: string;
  name: string;
  url: string;
  image:string;
  title:string;
  file: File;

  constructor(file: File) {
    this.file = file;
  }
}
