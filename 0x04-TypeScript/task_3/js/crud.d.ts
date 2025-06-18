import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

export function insertRow(row: RowElement): RowID;
export function deleteRow(rowId: RowID): void;
export function updateRow(rowId: RowID, row: RowElement): RowID;
export function updatedRow(newRowID: number, updatedRow: RowElement) {
    throw new Error('Function not implemented.');
}

