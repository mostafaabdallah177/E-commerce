import { PaymentType } from '../_serviese/PaymentType.model';
import { Category } from './../_serviese/Category.model';
import { BasiData } from './baseicData.model';
import { Tag } from './Tage.model';

export interface Prodect {
  id?: number;
  basiData: BasiData[];
  paymentTypeMethoud: PaymentType[];
  price: number;
  category: Category;
  tags?: Tag[];
  discount?: number;
  imgUrl: String[];
}
