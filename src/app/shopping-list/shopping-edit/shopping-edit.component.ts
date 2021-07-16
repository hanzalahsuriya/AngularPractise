import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/Ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() submitIngredient = new EventEmitter<Ingredient>();
  @ViewChild('amounttext', {static: true}) amountText: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddIngredient(name: HTMLInputElement) {
    this.submitIngredient.emit(new Ingredient(name.value, parseFloat(this.amountText.nativeElement.value)));
  }
}
