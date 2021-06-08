import { IBaseModel ,BaseModel } from '../shared/models/base.model';
import { IItemPackage, ItemPackage } from '../items/_subs/item-packages'
import { IItemBatch, ItemBatch } from '../items/_subs/item-batches'


export interface IItem extends IBaseModel {
  code?: string;
  name?: string;
  itemType?: string;
  itemCategory?: string;
  internalReference?: string;
  barcode?: string;
  // stockInHand?: number;
  // sellingPrice?: number;

  itemPackages?: IItemPackage[];
  itemBatches?: IItemBatch[];

}

export class Item extends BaseModel implements IItem {

  constructor() {   
    super(); 
    this.itemPackages = [] as IItemPackage[];
    this.itemBatches = [] as IItemBatch[];
  }

  code?: string;
  name?: string;
  itemType?: string;
  itemCategory?: string;
  internalReference?: string;
  barcode?: string;

  // stockInHand?: number;
  // sellingPrice?: number;
  
  itemPackages?: IItemPackage[];
  itemBatches?: IItemBatch[];
}

