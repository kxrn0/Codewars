class PaginationHelper {
	constructor(collection, itemsPerPage) {
		// The constructor takes in an array of items and a integer indicating how many
		// items fit within a single page
		this.collection = collection;
		this.itemsPerPage = itemsPerPage;
	}

	itemCount() {
		// returns the number of items within the entire collection
		return this.collection.length;
	}

	pageCount() {
		// returns the number of pages
		const fullPages = ~~(
			this.collection.length / this.itemsPerPage
		);
		const partialPages =
			this.collection.length % this.itemsPerPage ? 1 : 0;

		return fullPages + partialPages;
	}

	pageItemCount(pageIndex) {
		// returns the number of items on the current page. page_index is zero based.
		// this method should return -1 for pageIndex values that are out of range
		const pages = this.pageCount();
		const final = this.collection.length % this.itemsPerPage;

		if (pageIndex >= pages || pageIndex < 0) return -1;

		if (pageIndex < pages - 1 || !final) return this.itemsPerPage;

		return final;
		/*
		return this.collection.length % this.itemsPerPage;
		*/
	}

	pageIndex(itemIndex) {
		// determines what page an item is on. Zero based indexes
		// this method should return -1 for itemIndex values that are out of range
		if (itemIndex >= this.collection.length || itemIndex < 0)
			return -1;

		return ~~(itemIndex / this.itemsPerPage);
	}
}

const p = new PaginationHelper([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 5);
console.log(p.pageItemCount(0));
console.log(p.pageItemCount(1));

//time: 01hours, 02mins, 07secs
