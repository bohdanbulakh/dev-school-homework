class PaginationHelper{
    constructor(collection, itemsPerPage) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
    }

    itemCount() {
        return this.collection.length;
    }

    pageCount() {
        return Math.ceil(this.itemCount() / this.itemsPerPage);
    }

    pageItemCount(pageIndex) {
        if(pageIndex >= this.pageCount() || pageIndex < 0){
            return -1;
        }

        if(pageIndex === this.pageCount() - 1){
            return this.itemCount() - this.itemsPerPage * (this.pageCount() - 1);
        }

        return this.itemsPerPage;
    }
    pageIndex(itemIndex) {
        if(itemIndex >= this.itemCount() || itemIndex < 0){
            return -1
        }

        return Math.floor(itemIndex / this.itemsPerPage);
    }
}


const p = new PaginationHelper(['a','b','c','d','e','f'], 4)
console.log(p.pageIndex(6), p.pageCount())
