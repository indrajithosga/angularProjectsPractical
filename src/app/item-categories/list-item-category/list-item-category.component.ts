/* #region angular imports */
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
/* #endregion */

/* #region 3rd party imports */

/* #endregion */

/* #region app imports */
import { ItemCategoryService } from '../item-category.service';
import { ItemCategory } from '../item-category.model';
/* #endregion */

@Component({
  selector: 'selector-list-item-category',
  templateUrl: './list-item-category.component.html',
  styleUrls: [
    './list-item-category.component.css',
    './list-item-category.component.scss',
  ],
})
export class ListItemCategoryComponent {
  /* #region declarations */
  _pageTitle: string = 'Item Categories';
  _pageSubTitle: string = '';

  _itemCategories: ItemCategory[] = [];

  /* #endregion */

  /* #region constructor */
  constructor(private itemCategoryService: ItemCategoryService) {}
  /* #endregion */

  /* #region lifecycle events */
  ngOnInit() {
    this.itemCategoryService
      .getItemCategories()
      .then((data) => (this._itemCategories = data));
  }
  /* #endregion */

  /* #region events */

  /* #endregion */

  /* #region methods */

  exportPdf() {
    // import('jspdf').then((jsPDF) => {
    //   import('jspdf-autotable').then((x) => {
    //     const doc = new jsPDF.default(0, 0);
    //     doc.autoTable(this.exportColumns, this.items);
    //     doc.save('items.pdf');
    //   });
    // });
  }

  exportExcel() {
    // import('xlsx').then((xlsx) => {
    //   const worksheet = xlsx.utils.json_to_sheet(this.items);
    //   const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
    //   const excelBuffer: any = xlsx.write(workbook, {
    //     bookType: 'xlsx',
    //     type: 'array',
    //   });
    //   this.saveAsExcelFile(excelBuffer, 'items');
    // });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    // import('file-saver').then((FileSaver) => {
    //   let EXCEL_TYPE =
    //     'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    //   let EXCEL_EXTENSION = '.xlsx';
    //   const data: Blob = new Blob([buffer], {
    //     type: EXCEL_TYPE,
    //   });
    //   FileSaver.saveAs(
    //     data,
    //     fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION
    //   );
    // });
  }

  /* #endregion */
}
