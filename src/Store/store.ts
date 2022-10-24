import {products, ProductType} from '../../data/products';
 
export interface ProductStoreType {
    initialState: ProductType[];
    products: ProductType[];
    readonly categories: string[];
    getProductDetails(id: number): void;
    getProductData: Boolean;
    showPDP: Boolean;
    selectedProduct: ProductType;
    selectedCategories: string[];
    selectedProductId: number;
    productDataFiltered: ProductType[];
    handleCategorySelection(category: any): void;
    setProductDetails(id:number):void;
    handleSearch(e: React.KeyboardEvent<HTMLInputElement>):void;
    searchQuery:string;
}

export function ProductStore():ProductStoreType|null{
  
    return {
        initialState: [...products],
        products:[...products],
        get categories(){
            const categories = Array.from(new Set(this.initialState.map(product => product.category)))
            return categories
        },
        getProductDetails(id:number){
            const selectedProduct = this.initialState.filter(product => product.id===id);
            return selectedProduct[0];
        },
        selectedProduct:products[0],
        productDataFiltered:[],
        selectedCategories:[],
        showPDP:false,
        selectedProductId:1,
        setProductDetails(id:number){
            this.showPDP = true;
            this.selectedProductId=id,
            this.selectedProduct = this.initialState.filter(product => product.id===id)[0];
        },
        getProductData: false,
        searchQuery:" ",
        handleSearch(e){
            const searchQuery= (e.target as HTMLInputElement).value;
            this.searchQuery=searchQuery;
            this.showPDP = false;
            this.getProductData = true;

            if(!searchQuery || searchQuery===" " || searchQuery===""){
                this.products =[...this.initialState];
            }
         
            if(!this.productDataFiltered.length && !this.selectedCategories.length){
                this.productDataFiltered = [...this.initialState.filter(product => product.productName.toLowerCase().includes(searchQuery.toLowerCase()))]
                this.products = [...this.productDataFiltered];
            }
            if(this.productDataFiltered.length && this.selectedCategories.length){
                const data =this.productDataFiltered.filter(product => {
                this.selectedCategories.includes(product.category) && product.productName.toLowerCase().includes(this.searchQuery.toLowerCase())
                });
                this.products = [...data];
            }
            if(this.productDataFiltered.length && !this.selectedCategories.length){
                const data = this.productDataFiltered.filter( product => {
                    console.log(product.productName.toLowerCase());
                    console.log(searchQuery.toLowerCase());
                    return product.productName.toLowerCase().includes(searchQuery.toLowerCase());
                });
                this.products = [...data];
            }

        },
        handleCategorySelection(category){
            this.showPDP = false;
            if (!this.selectedCategories.includes(category)) {
                this.selectedCategories.push(category);
            } else {
                this.selectedCategories.splice(this.selectedCategories.indexOf(category), 1);
            }
            if(this.selectedCategories.length && this.productDataFiltered.length) {
                if(this.searchQuery.length){
                    this.productDataFiltered = this.productDataFiltered.filter(product => (this.selectedCategories.includes(product.category)) && (product.productName.toLowerCase().includes(this.searchQuery.toLowerCase())));

                }else{
                    this.productDataFiltered = this.productDataFiltered.filter(product => this.selectedCategories.includes(product.category));
                }
                this.products = [...this.productDataFiltered];
            }
            else if(this.selectedCategories.length && this.productDataFiltered.length) {
                this.productDataFiltered = this.initialState.filter(product => this.selectedCategories.includes(product.category));
                this.products = [...this.productDataFiltered];
            }
            else{
                this.products = [...this.initialState];
            }
            
        }
    }

   
}
