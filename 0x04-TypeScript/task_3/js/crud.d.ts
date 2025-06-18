import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

export declare function insertRow(row: RowElement): number;
export declare function deleteRow(rowId: RowID): void;
export declare function updateRow(rowId: RowID, row: RowElement): number;


