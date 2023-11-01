import { Component, Input, forwardRef } from '@angular/core';
import { ControlContainer, ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'pm-password-input',
  templateUrl: './password-input.component.html',
  providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => PasswordInputComponent),
			multi: true,
		},
	],
})
export class PasswordInputComponent implements ControlValueAccessor {
  @Input() controlName!: string;
  @Input() inputType = 'password'; // can be password or text
  @Input() placeholder = 'Password';
  @Input() autoComplete = 'current-password' // can be e.g. current-password or new-password
  @Input() idAttr = 'password-input';

  parent!: ControlContainer;

  value!: any;
	onChange!: any;
	onTouched!: any;
	disabled = false;

  get form(): FormGroup {
		return this.parent.control as FormGroup;
	}

	get control(): FormControl {
		return this.form.get(this.controlName) as FormControl;
	}

  constructor(container: ControlContainer) {
		this.parent = container;
	}

  // control value accessor functions start
	registerOnChange(fn: any): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: any): void {
		this.onTouched = fn;
	}

	writeValue(value: any): void {
		this.value = value;
	}

	setDisabledState(isDisabled: boolean): void {
		this.disabled = isDisabled;
	}

  updateValue(value: string) {
		this.value = value;
		this.onChange(this.value);
	}

  togglePassword(): void {
		this.inputType = (this.inputType === 'password') ? 'text' : 'password';
	}
}
