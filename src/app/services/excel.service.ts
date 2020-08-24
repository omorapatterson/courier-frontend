import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable()
export class ExcelService {
	constructor() {}

	public exportAsExcelFile(json: any[], excelFileName: string): void {
		const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
		const workbook: XLSX.WorkBook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
		const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
		this.saveAsExcelFile(excelBuffer, excelFileName);
	}

	private saveAsExcelFile(buffer: any, fileName: string): void {
		const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
		let fecha = new Date().getDay() + '-' + new Date().getMonth() + '-' + new Date().getFullYear();
		let hora = new Date().getHours() + '_' + new Date().getMinutes() + '_' + new Date().getSeconds();
		FileSaver.saveAs(data, fileName + '_' + fecha + '_' + hora + EXCEL_EXTENSION);
	}
}
