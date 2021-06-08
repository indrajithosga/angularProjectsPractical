import { IBaseModel, BaseModel } from '../../../shared/models';

export interface IItemBatch extends IBaseModel {
  itemId: number;
  batchNumber?: string;
  manufacturedDate?: string;
  expiryDate?: string;
  warrantyDays?: number;
  quantity?: number;
  availableQuantity?: number;
  sellingPrice?: number;
}

export class ItemBatch extends BaseModel implements IItemBatch {

  constructor() {    
      super(); 
  }

  itemId: number;
  batchNumber?: string;
  manufacturedDate?: string;
  expiryDate?: string;
  warrantyDays?: number;
  quantity?: number;
  availableQuantity?: number;
  sellingPrice?: number;
}