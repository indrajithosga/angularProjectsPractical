import { BaseModel } from '../shared/models/base.model';
import { IItem, Item } from '../items';

export interface IInvoiceItem {
  item: IItem;  
  quantity: number;
  sellingPrice: number;
  barcode?: string; 
}

export class InvoiceItem extends BaseModel implements IInvoiceItem{
  constructor() {
    super();

    this.item = {} as IItem;    
  }

  item: IItem;  
  sellingPrice: number;
  quantity: number;
  barcode?: string; 
}