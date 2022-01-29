import { Prodect } from 'src/app/__models/prodect.model';
import { EventEmitter } from '@angular/core';

export class ProdectServes {
  prodects: Prodect[] = [];
  constructor() {
    this.prodects = [
      {
        id: 1,
        basiData: [
          {
            id: 1,
            name: 'Camera',
            dis: 'this IS Cam ',
            langage: [{ id: 1, name: 'en' }],
          },
        ],

        category: { id: 1, name: 'Art & Carf' },

        paymentTypeMethoud: [{ id: 1, name: 'visa' }],
        price: 200,
        discount: 50,
        imgUrl: ['assets/img/flags.png'],
      },
      {
        id: 2,
        basiData: [
          {
            id: 2,
            name: 'Camera',
            dis: 'this IS Cam ',
            langage: [{ id: 2, name: 'en' }],
          },
        ],

        category: { id: 2, name: 'Art & Carf' },

        paymentTypeMethoud: [{ id: 2, name: 'visa' }],
        price: 200,
        discount: 50,
        imgUrl: ['assets/img/flags.png'],
      },
      {
        id: 3,
        basiData: [
          {
            id: 3,
            name: 'Camera',
            dis: 'this IS Cam ',
            langage: [{ id: 3, name: 'en' }],
          },
        ],

        category: { id: 3, name: 'Art & Carf' },

        paymentTypeMethoud: [{ id: 3, name: 'visa' }],
        price: 200,
        discount: 50,
        imgUrl: ['assets/img/flags.png'],
      },
      {
        id: 4,
        basiData: [
          {
            id: 4,
            name: 'Camera',
            dis: 'this IS Cam ',
            langage: [{ id: 4, name: 'en' }],
          },
        ],

        category: { id: 4, name: 'Art & Carf' },

        paymentTypeMethoud: [{ id: 4, name: 'visa' }],
        price: 200,
        discount: 50,
        imgUrl: ['assets/img/flags.png'],
      },
      {
        id: 5,
        basiData: [
          {
            id: 5,
            name: 'Camera',
            dis: 'this IS Cam ',
            langage: [{ id: 5, name: 'en' }],
          },
        ],

        category: { id: 5, name: 'Art & Carf' },

        paymentTypeMethoud: [{ id: 5, name: 'visa' }],
        price: 200,
        discount: 50,
        imgUrl: ['assets/img/flags.png'],
      },
      {
        id: 5,
        basiData: [
          {
            id: 5,
            name: 'Camera',
            dis: 'this IS Cam ',
            langage: [{ id: 5, name: 'en' }],
          },
        ],

        category: { id: 5, name: 'Art & Carf' },

        paymentTypeMethoud: [{ id: 5, name: 'visa' }],
        price: 200,
        discount: 50,
        imgUrl: ['assets/img/flags.png'],
      },
      {
        id: 6,
        basiData: [
          {
            id: 6,
            name: 'Camera',
            dis: 'this IS Cam ',
            langage: [{ id: 7, name: 'en' }],
          },
        ],

        category: { id: 7, name: 'Art & Carf' },

        paymentTypeMethoud: [{ id: 7, name: 'visa' }],
        price: 200,
        discount: 50,
        imgUrl: ['assets/img/flags.png'],
      },
      {
        id: 8,
        basiData: [
          {
            id: 8,
            name: 'Camera',
            dis: 'this IS Cam ',
            langage: [{ id: 8, name: 'en' }],
          },
        ],

        category: { id: 1, name: 'Art & Carf' },

        paymentTypeMethoud: [{ id: 1, name: 'visa' }],
        price: 200,
        discount: 50,
        imgUrl: ['assets/img/flags.png'],
      },
      {
        id: 9,
        basiData: [
          {
            id: 1,
            name: 'Camera',
            dis: 'this IS Cam ',
            langage: [{ id: 1, name: 'en' }],
          },
        ],

        category: { id: 1, name: 'Art & Carf' },

        paymentTypeMethoud: [{ id: 1, name: 'visa' }],
        price: 200,
        discount: 50,
        imgUrl: ['assets/img/flags.png'],
      },
      {
        id: 10,
        basiData: [
          {
            id: 1,
            name: 'Camera',
            dis: 'this IS Cam ',
            langage: [{ id: 1, name: 'en' }],
          },
        ],

        category: { id: 1, name: 'Art & Carf' },

        paymentTypeMethoud: [{ id: 1, name: 'visa' }],
        price: 200,
        discount: 50,
        imgUrl: ['assets/img/flags.png'],
      },
      {
        id: 11,
        basiData: [
          {
            id: 1,
            name: 'Camera',
            dis: 'this IS Cam ',
            langage: [{ id: 1, name: 'en' }],
          },
        ],

        category: { id: 1, name: 'Art & Carf' },

        paymentTypeMethoud: [{ id: 1, name: 'visa' }],
        price: 200,
        discount: 50,
        imgUrl: ['assets/img/flags.png'],
      },
      {
        id: 12,
        basiData: [
          {
            id: 1,
            name: 'Camera',
            dis: 'this IS Cam ',
            langage: [{ id: 1, name: 'en' }],
          },
        ],

        category: { id: 1, name: 'Art & Carf' },

        paymentTypeMethoud: [{ id: 1, name: 'visa' }],
        price: 200,
        discount: 50,
        imgUrl: ['assets/img/flags.png'],
      },
      {
        id: 13,
        basiData: [
          {
            id: 1,
            name: 'Camera',
            dis: 'this IS Cam ',
            langage: [{ id: 1, name: 'en' }],
          },
        ],

        category: { id: 1, name: 'Art & Carf' },
        paymentTypeMethoud: [{ id: 1, name: 'visa' }],
        price: 200,
        discount: 50,
        imgUrl: ['assets/img/flags.png'],
      },
    ];
  }
  getallProdect() {
    return [...this.prodects];
  }
  itemAdd = new EventEmitter<Prodect>();
  public deletitem = new EventEmitter();
  getProdectByID(id: number) {
    return this.prodects.find((prodects) => prodects.id === id);
  }
  addProdect(prodects: Prodect) {
    this.prodects.push(prodects);
    return [...this.prodects];
  }
  updataprodect(prodects: Prodect) {
    const index = this.prodects.findIndex((p) => p.id === prodects.id);
    this.prodects[index] = prodects;
    return [...this.prodects];
  }
  deleteprodect(id: number | undefined) {
    const index = this.prodects.findIndex((p) => p.id === id);
    this.prodects.splice(index, 1);
    this.deletitem.emit([...this.prodects]);
  }
}
