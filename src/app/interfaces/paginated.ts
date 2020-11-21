export interface Paginated {
    content: any[];
    pageable: {
        sort: {
            unsorted: Boolean;
            sorted: Boolean;
            empty: Boolean;
        }
        urlSafeCursor: String;
        totalCount: Number;
        offset: Number;
        pageSize: Number;
        pageNumber: Number;
        unpaged: Boolean;
        paged: Boolean;
    }
    last: Boolean;
    totalElements: Number;
    totalPages: Number;
    size: Number;
    number: Number;
    sort: {
        unsorted: Boolean;
        sorted: Boolean;
        empty: Boolean;
    }
    first: Boolean;
    numberOfElements: Number;
    empty: Boolean; 
}