import { BaseModel } from '../shared/models/base.model';

export interface ItemCategory extends BaseModel {
  code?: string;
  name?: string;
  parentId?: string;  
}

// export interface IProductCategoryLookup {
//   id: string;
//   name: string;
//   code: string;
//   displayText: string;
//   value: string;
//   label: string;
// }