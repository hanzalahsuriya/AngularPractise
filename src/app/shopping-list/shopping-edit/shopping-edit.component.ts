import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/Ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  // @Output() submitIngredient = new EventEmitter<Ingredient>();
  editSubscription : Subscription;
  editedIndex: number;
  editMode: boolean = false;
  editedItem: Ingredient;

  // @ViewChild('amounttext', {static: true}) amountText: ElementRef;

  @ViewChild('f', {static: true}) form: NgForm;

  constructor(private shoppingListService: ShoppingListService) { }
  ngOnDestroy(): void {
    this.editSubscription.unsubscribe();
  }



  ngOnInit(): void {
    this.editSubscription = this.shoppingListService.startedEditing.subscribe((index: number) => {
      this.editedIndex = index;
      this.editMode = true;
      this.editedItem = this.shoppingListService.getIngredient(index);

      this.form.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      })
    });
  }

  // onAddIngredient(name: HTMLInputElement) {
  //   this.submitIngredient.emit(new Ingredient(name.value, parseFloat(this.amountText.nativeElement.value)));
  // }

  // onAddIngredient(name: HTMLInputElement) {
  //   this.shoppingListService.addIngredient(new Ingredient(name.value, parseFloat(this.amountText.nativeElement.value)));
  // }

  onAddItem(form: NgForm) {
    const formValues = form.value;
    const newIngredient = new Ingredient(formValues.name, formValues.amount);
    if(this.editMode) {
      this.shoppingListService.updateIngredient(this.editedIndex, newIngredient);
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
  }

}
