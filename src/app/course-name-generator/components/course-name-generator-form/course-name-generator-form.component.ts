import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { CourseNameGeneratorService, NameConfiguration, FinalName } from '../../course-name-generator.service';

@Component({
  selector: 'course-name-generator-form',
  templateUrl: './course-name-generator-form.component.html',
  styleUrls: ['course-name-generator-form.component.scss']
})
export class CourseNameGeneratorForm {
  @Output()
  formValue: EventEmitter<NameConfiguration> = new EventEmitter<NameConfiguration>();

  @Input()
  finalName: FinalName;

  @Output()
  shuffleProperty: EventEmitter<object> = new EventEmitter<object>();

  courseNameGeneratorForm: FormGroup;
  hasErrors = false;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.courseNameGeneratorForm = this.fb.group({
      theme: ['', Validators.required],
      enhancers: this.fb.group({
        adjectives: [false],
        aspirationals: [false],
        formats: [false],
      }),
      articles: [false],
    }, { updateOn: 'blur' });
  }

  removeWord(word: string, property: string) {
    this.finalName[word] = '';
    if (property.includes('.')) {
      const [group, name] = property.split('.');
      this.courseNameGeneratorForm.get(group).get(name).setValue(false);
    } else {
      this.courseNameGeneratorForm.get(property).setValue(false);
    }
  }

  shuffleWord(property: string, theme?: string, currentWord?: string){
    this.shuffleProperty.emit({property, theme, currentWord});
  }

  onSubmit() {
    const enhancers = [...Object.values(this.courseNameGeneratorForm.get('enhancers').value)];
    if (!enhancers.some((value) => value === true)) {
      this.hasErrors = true;
      this.courseNameGeneratorForm.get('enhancers').setErrors({ 'minimumEnhancers': true })
    }
    if (this.courseNameGeneratorForm.invalid) {
      this.finalName = {
        article: '',
        theme: this.courseNameGeneratorForm.get('theme').value,
        adjective: '',
        aspirational: '',
        format: ''
      };
    }
    if (this.courseNameGeneratorForm.valid) {
      this.hasErrors = false;
      this.formValue.emit(this.courseNameGeneratorForm.value);
    }
  }
}
