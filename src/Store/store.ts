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
    handleSearch(e: React.KeyboardEvent<HTMLInputElement>):void
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
            this.selectedProduct = this.initialState.filter(product => product.id===id)[0];
        },
        getProductData: false,
        handleSearch(e){
            const searchQuery= (e.target as HTMLInputElement).value;
            this.showPDP = false;
            this.getProductData = true;

            if(!searchQuery || searchQuery===" "){
                this.products =[...this.initialState];
            }
            if(!this.productDataFiltered.length && !this.selectedCategories.length){
                const productDataFiltered = [...this.initialState.filter(product => product.productName.toLowerCase().includes(searchQuery.toLowerCase()))]
                this.products = [...productDataFiltered];
            }
            else if(!!this.productDataFiltered.length && !!this.selectedCategories.length){
                this.products =[...this.productDataFiltered.filter(product => product.productName.toLowerCase().includes(searchQuery.toLowerCase()))]
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
                this.productDataFiltered = this.productDataFiltered.filter(product => this.selectedCategories.includes(product.category));
                this.products = [...this.productDataFiltered];
            }
            else if(this.selectedCategories.length && this.productDataFiltered.length===0) {
                console.log(this.productDataFiltered.length,'productDataFiltered');
                this.productDataFiltered = this.initialState.filter(product => this.selectedCategories.includes(product.category));
                this.products = [...this.productDataFiltered];
            }
            else{
                this.products = [...this.initialState];
            }
            
        }
    }

   
}
