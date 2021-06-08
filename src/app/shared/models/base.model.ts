export interface IBaseModel {
  id?: number;
  rowVersion?: string;
  createdDateTime?: string;
  updatedDateTime?: string;
  recordStatus?: number;
  isDeleted?: boolean;
  remarks?: string;
}

export class BaseModel implements IBaseModel{
  constructor() {
    
  }

  id?: number;
  rowVersion?: string;
  createdDateTime?: string;
  updatedDateTime?: string;
  recordStatus?: number;
  isDeleted?: boolean;
  remarks?: string;
}

