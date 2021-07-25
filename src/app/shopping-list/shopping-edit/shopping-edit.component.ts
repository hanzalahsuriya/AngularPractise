import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/shared/Ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  // @Output() submitIngredient = new EventEmitter<Ingredient>();



  // @ViewChild('amounttext', {static: true}) amountText: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  // onAddIngredient(name: HTMLInputElement) {
  //   this.submitIngredient.emit(new Ingredient(name.value, parseFloat(this.amountText.nativeElement.value)));
  // }

  // onAddIngredient(name: HTMLInputElement) {
  //   this.shoppingListService.addIngredient(new Ingredient(name.value, parseFloat(this.amountText.nativeElement.value)));
  // }

  onAddItem(form: NgForm) {
    const formValues = form.value;
    this.shoppingListService.addIngredient(new Ingredient(formValues.name, formValues.amount));

  }

}
