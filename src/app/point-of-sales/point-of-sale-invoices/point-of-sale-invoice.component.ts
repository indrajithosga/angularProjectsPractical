/* #region angular imports */
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
/* #endregion */

/* #region 3rd party imports */
import * as _ from 'lodash';
import { AutoComplete } from 'primeng/autocomplete';
/* #endregion */

/* #region app imports */
import { IItem, Item } from '../../items';
import { IItemPackage, ItemPackage } from '../../items/_subs/item-packages';
import { IItemBatch, ItemBatch } from '../../items/_subs/item-batches';
import { ItemService } from '../../items';
import { IInvoiceItem, InvoiceItem } from '../../point-of-sales';
/* #endregion */

function hello() {
  alert('Hello!!!');
}

window.addEventListener('keydown', function (e) {
  if (e.keyCode === 112) {
    e.preventDefault();
  }
});

@Component({
  selector: 'selector-point-of-sale-invoice',
  templateUrl: './point-of-sale-invoice.component.html',
  styleUrls: [
    './point-of-sale-invoice.component.css',
    './point-of-sale-invoice.component.scss',
  ],
})
export class PointOfSaleInvoiceComponent implements OnInit {
  /* #region declarations */
  _pageTitle: string = 'Point Of Sale Invoice Component';
  _pageSubTitle: string = '';

  _isDisplaySearch: boolean = false;

  _item: Item;
  _items: Item[];
  _filteredItems: Item[];
  _selectedItem: Item;
  _itemColumns: any[];

  _invoiceItem: InvoiceItem;
  _invoiceItems: InvoiceItem[] = [];
  _selectedInvoiceItem: InvoiceItem;
  _invoiceItemColumns: any[];

  _itemPackage: IItemPackage;
  _itemPackages: IItemPackage[] = [];

  _itemBatch: IItemBatch;
  _itemBatches: IItemBatch[];
  _itemBatchColumns: any[];

  @HostListener('document:keyup', ['$event'])
  public handleKeyboardEvent(event: any) {
    event.preventDefault();
    if (event.keyCode === 112) {
      event.preventDefault();
      this.displaySearch();
    }
  }

  @ViewChild('id_autoComplete_item')
  _el_autoComplete_item: AutoComplete;

  @ViewChild('id_autoComplete_item_search')
  _el_autoComplete_item_search: AutoComplete;

  /* #endregion */

  /* #region constructor */
  constructor(private itemService: ItemService) {}
  /* #endregion */

  /* #region lifecycle events */
  ngOnInit() {
    this._itemColumns = [
      { field: 'code', header: 'Code', width: '5%' },
      { field: 'name', header: 'Name', width: '70%' },
      { field: 'stockInHand', header: 'Stock In Hand', width: '10%' },
    ];

    this._invoiceItemColumns = [
      { field: 'id', header: 'ID', width: '5%', visible: true, align: 'left' },
      {
        field: 'code',
        header: 'CODE',
        width: '5%',
        visible: true,
        align: 'left',
      },
      {
        field: 'name',
        header: 'NAME',
        width: '30%',
        visible: true,
        align: 'left',
      },
      {
        field: 'sellingPrice',
        header: 'PRICE',
        width: '5%',
        visible: true,
        align: 'left',
      },
      {
        field: 'quantity',
        header: 'QTY',
        width: '5%',
        visible: true,
        align: 'left',
      },
      {
        field: 'subTotal',
        header: 'SUB TOT.',
        width: '5%',
        visible: true,
        align: 'left',
      },
      {
        field: 'discount',
        header: 'DISCOUNT',
        width: '5%',
        visible: true,
        align: 'left',
      },
      {
        field: 'total',
        header: 'TOTAL',
        width: '5%',
        visible: true,
        align: 'left',
      },
    ];

    this._itemBatchColumns = [
      { field: 'id', header: 'Id', width: '5%', visible: true, align: 'left' },
      {
        field: 'itemId',
        header: 'Item Id',
        width: '5%',
        visible: true,
        align: 'left',
      },
      { field: 'batchNumber', header: 'Batch Number', width: '5%' },
      { field: 'manufacturedDate', header: 'Manufactured Date', width: '70%' },
      { field: 'expiryDate', header: 'Expiry Date', width: '10%' },
      { field: 'warrantyDays', header: 'Warranty Days', width: '10%' },
      { field: 'quantity', header: 'Quantity', width: '10%' },
      {
        field: 'availableQuantity',
        header: 'Available Quantity',
        width: '10%',
      },
      { field: 'sellingPrice', header: 'Selling Price', width: '10%' },
      { field: 'invoiceQuantity', header: 'Invoice Quantity', width: '10%' },
    ];

    // hello();
  }
  /* #endregion */

  /* #region events */

  onFilterItems($event: any) {
    // if (this._el_autoComplete_item.inputEL.nativeElement.value == '')
    //   return;
    // this.itemService.getItems().then((data) => {
    //   this._filteredItems = data;
    //   this._selectedItem = this._filteredItems[0];
    // });
  }

  onItemAutoComplete_KeyUp($event: any) {
    if ($event.keyCode == 13) {
      // if (this._el_autoComplete_item.inputEL.nativeElement.value !== '') {
      //   this.addInvoiceItem($event);
      //   this._el_autoComplete_item.inputEL.nativeElement.value = '';
      //   this._el_autoComplete_item.hide();
      // }

      //Get item by barcode
      if (this._el_autoComplete_item.inputEL.nativeElement.value !== '') {
        this.addItemByBarcode(
          this._el_autoComplete_item.inputEL.nativeElement.value
        );
      }
    }
  }

  onItemAutoComplete_Select($event: any) {
    // this.addInvoiceItem($event);
    // this._el_autoComplete_item.inputEL.nativeElement.value = '';
    // this._el_autoComplete_item.hide();
    // this._el_autoComplete_item_search.inputEL.nativeElement.value = '';
    // this._el_autoComplete_item_search.hide();
  }

  onItemSearchDialogAfterShow() {
    this._el_autoComplete_item_search.inputEL.nativeElement.focus();
  }

  /* #endregion */

  /* #region methods */

  private addInvoiceItem(
    item: Item,
    itemBatch: ItemBatch,
    itemPackage: ItemPackage
  ) {
    let objItem = item as Item;

    this._invoiceItem = new InvoiceItem();

    var maxIdObject = _.maxBy(this._invoiceItems, 'id');

    if (typeof maxIdObject === 'undefined' || maxIdObject === null) {
      this._invoiceItem.id = 1;
    } else {
      this._invoiceItem.id = Number(maxIdObject.id) + 1;
    }

    this._invoiceItem.item = objItem;
    //this._invoiceItem.quantity = quantity;
    // this._invoiceItem.sellingPrice = objItem.sellingPrice;
    this._invoiceItems.push(this._invoiceItem);
    this._isDisplaySearch = false;
    this._el_autoComplete_item.inputEL.nativeElement.value = '';
    this._el_autoComplete_item.hide();
  }

  private displaySearch() {
    this._isDisplaySearch = true;
  }

  private addItemByBarcode(barcode: string) {
    this.itemService.getItemByBarcode(barcode).then((data) => {
      this._item = <IItem>data;
      let itemPackages = <ItemPackage[]>_.filter(this._item.itemPackages, {
        barcode: barcode,
      });

      this._itemPackage = itemPackages[0];
      //this.addInvoiceItem(this._item, itemPackage[0].packSize);
    });
  }

  /* #endregion */
}
