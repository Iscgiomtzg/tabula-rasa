import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { RedactService } from 'src/app/services/write/redact.service';

@Component({
  selector: 'app-redact',
  templateUrl: './redact.component.html',
  styleUrls: ['./redact.component.scss']
})
export class RedactComponent implements OnInit {

  public valid: boolean = false;
  public form: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    control: new FormControl('', Validators.required),
  });

  constructor(private redactService: RedactService) { }

  public ngOnInit(): void {}

  public onSubmit(){
    this.form.value.uri = this.transformTextToURI(this.form.value.title);
    this.form.value.component = this.transformTextToComponent(this.form.value.title);
    this.form.value.path = this.transformTextToPath(this.form.value.title);
    this.redactService.publishPost(this.form.value);
    window.location.reload();
  }

  private transformTextToURI(text: string): string{
    let convertText = text.toLocaleLowerCase().split(' ');
    return convertText.join('-');
  }

  private transformTextToComponent(text: string): string{
    let convertText = text.split(' ');
    convertText = convertText.map(v => v.charAt(0).toLocaleUpperCase() + v.slice(1));    
    return convertText.join('') +'Component';
  }

  private transformTextToPath(text: string): string{
    let textSplitted = text.split(' ');
    let firstWordLowerCase = textSplitted[0].charAt(0).toLocaleLowerCase() + textSplitted[0].slice(1);
    textSplitted.shift();
    textSplitted = textSplitted.map(v => v.charAt(0).toLocaleUpperCase() + v.slice(1));    

    return `${firstWordLowerCase}${textSplitted.join('')}`;
  }

}
