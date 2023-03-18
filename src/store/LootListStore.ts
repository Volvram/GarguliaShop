import { EQUIPMENT, EquipmentType } from "@config/equipment";
import { ILocalStore } from "@utils/useLocalStore";
import { makeObservable, observable, action, computed } from "mobx";

import rootStore from "./RootStore/instance";

type PrivateFields =
  | "_currentItems"
  | "_pageCount"
  | "_itemsPerPage"
  | "_itemOffset";

class LootListStore implements ILocalStore {
  private _equipment: EquipmentType[] = Object.assign([], EQUIPMENT);

  // fields for pagination
  private _currentItems: EquipmentType[] | null = null;
  private _pageCount = 1;
  private _itemsPerPage = 6;
  private _itemOffset = -1;

  constructor() {
    makeObservable<LootListStore, PrivateFields>(this, {
      _currentItems: observable,
      setCurrentItems: action,
      currentItems: computed,
      _pageCount: observable,
      setPageCount: action,
      pageCount: computed,
      _itemsPerPage: observable,
      setItemsPerPage: action,
      itemsPerPage: computed,
      _itemOffset: observable,
      setItemOffset: action,
      itemOffset: computed,
    });
  }

  // fields for pagination
  get currentItems() {
    return this._currentItems;
  }

  setCurrentItems(currentItems: EquipmentType[] | null) {
    this._currentItems = currentItems;
  }

  get pageCount() {
    return this._pageCount;
  }

  setPageCount(pageCount: number) {
    this._pageCount = pageCount;
  }

  get itemsPerPage() {
    return this._itemsPerPage;
  }

  setItemOffset(itemOffset: number) {
    this._itemOffset = itemOffset;
  }

  get itemOffset() {
    return this._itemOffset;
  }

  setItemsPerPage(itemsPerPage: number) {
    this._itemsPerPage = itemsPerPage;
  }

  handlePageClick = (event: { selected: number }) => {
    const newOffset =
      (event.selected * this._itemsPerPage) % this._equipment.length;
    this.setItemOffset(newOffset);
    this.changePage();
  };

  changePage = () => {
    const filteredEquipment = this._equipment.filter(
      (item) => item.type === rootStore.query.getParam("loot-section")
    );

    const endOffset = this._itemOffset + this._itemsPerPage;
    this._equipment.length !== 0
      ? this.setCurrentItems(
          filteredEquipment.slice(this._itemOffset, endOffset)
        )
      : this.setCurrentItems(null);
    this.setPageCount(Math.ceil(filteredEquipment.length / this._itemsPerPage));
  };

  destroy() {}
}
export default LootListStore;
