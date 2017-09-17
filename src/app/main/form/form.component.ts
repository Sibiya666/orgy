import {
    Component,
    OnInit,
    EventEmitter,
    Output
} from '@angular/core';

import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
    FormArray
} from '@angular/forms';

import {
    IRequest,
    Customer
} from '../main.models';

@Component({
    selector: 'my-form',
    templateUrl: 'form.component.html'
})

export class myForm {
    public myForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.createForm();
    }

    createForm() {
        this.myForm = this.fb.group({
            users: this.fb.array([
                this.initUser()
            ]),
        })
    }

    initUser() {
        return this.fb.group({
            user: ['', [Validators.required, Validators.minLength(2)]],
            tanks: ['', [Validators.requiredTrue]],
            desingers: ['', [Validators.requiredTrue]]
        })
    }

    addUser() {
        const control = <FormArray>this.myForm.controls['users'];
        control.push(this.initUser())
    }

    removeUser(i: number) {
        const control = <FormArray>this.myForm.controls['users'];
        control.removeAt(i);
    }

    save(model: Customer) {
        console.log(this.myForm.value)
    }
}