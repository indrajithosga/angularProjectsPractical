import { BaseModel } from '../../../shared/models';

export interface IItemSellingBatch extends IBaseModel {
  code?: string;
  manufacturedDate?: string;
  expiryDate?: string;
  warrantyDays?: number;
  availableQuantity?: number;
  sellingPrice?: number;
}

export class ItemSellingBatch extends BaseModel implements IItemSellingBatch {

  constructor() {    
      super(); 
  }

  code?: string;
  manufacturedDate?: string;
  expiryDate?: string;
  warrantyDays?: number;
  availableQuantity?: number;
  sellingPrice?: number;
}
