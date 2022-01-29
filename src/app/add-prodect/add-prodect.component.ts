import { Prodect } from 'src/app/__models/prodect.model';
import { Category } from './../_serviese/Category.model';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoriesService } from '../_serviese/categories.service';
import { PaymentTypeService } from '../_serviese/payment-type.service';
import { PaymentType } from '../_serviese/PaymentType.model';

@Component({
  selector: 'app-add-prodect',
  templateUrl: './add-prodect.component.html',
  styleUrls: ['./add-prodect.component.scss'],
})
export class AddProdectComponent implements OnInit {
  category!: Category[];
  paymentMethouds!: PaymentType[];
  prodect!: Prodect;
  @ViewChild('nametext') nameInput!: ElementRef;

  constructor(
    private categroyServies: CategoriesService,
    private payment_type: PaymentTypeService
  ) {}

  ngOnInit(): void {
    this.category = this.categroyServies.getAllGategroys();
    this.paymentMethouds = this.payment_type.getAllPymentTypes();
  }

  onSubmet(form: NgForm) {
    const cat = this.categroyServies.getCategroyById(+form.value.Category);
    this.prodect = {
      basiData: [
        {
          id: 1,
          name: form.value.nameInputField,
          dis: form.value.disInputField,
          langage: [{ id: 1, name: 'en' }],
        },
      ],

      category: { name: '' },

      paymentTypeMethoud: [{ id: 1, name: 'visa' }],
      price: 200,
      discount: 50,
      imgUrl: ['assets/img/flags.png'],
    };

    if (cat) {
      this.prodect.category = cat;
    }
    this.prodect = { ...form.value };
    // console.log((this.nameInput.nativeElement as HTMLInputElement).value);
    console.log(this.prodect);
  }
}
