import { IBaseModel ,BaseModel } from '../../../shared/models';

export interface IItemPackage extends IBaseModel {
  itemId: number;
  Barcode?: string;
  packSize?: number;
  // isDefaultSellingPackage?: boolean;
  // isDefaultPurchasingPackage?: boolean;
}

export class ItemPackage extends BaseModel implements IItemPackage {

  constructor() {   
    super(); 
  }

  itemId: number;
  Barcode?: string;
  packSize?: number;
  // isDefaultSellingPackage?: boolean;
  // isDefaultPurchasingPackage?: boolean;
}