import Analysis from '../models/analysis';
import Vineyards from '../models/vineyards';
import Blocks from '../models/blocks';
import Rows from '../models/rows';

export const newDataEntry = (params) => {
	return new Analysis({
		method_id: params.method_id,
		row_id: params.row_id,
		date: params.date,
		result: params.result
	})
	.save();
}

export const findRowId = (params) => {
	return new Vineyards({name: params.vineyard})
	.fetch()
	.then((vineyard) => {
		let vin_id = vineyard.attributes.id.toString();
		return new Blocks({
			name: params.block,
			vineyard_id: vin_id
		})
		.fetch()
		.then((block) => {
			let block_id = block.attributes.id.toString();
			return new Rows({
				number: params.row,
				block_id: block_id
			})
			.fetch()
			.then((row) => {
				let row_id = row.attributes.id.toString();
				return row_id;
			})
		})
	})
}

export const findDatabyRowId = (params) => {
	return new Analysis({
		row_id: params.row_id,
		id: params.method_id
	})
	.fetch()
	.then((data) => {
		console.log('this is the data from the db query for row and id data: ', data);
		return data;
	})
}
