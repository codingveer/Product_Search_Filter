import { configure } from 'mobx';
configure({ useProxies: 'never' });
import {products} from '../../data/products'
export const ProductStore  = () => {
    return {
        initialState : [...products],
        products:[...products],
        get categories(){
            const categories = Array.from(new Set(this.initialState.map(product => product.category)))
            return categories
        },
        getProductDetails(id){
            this.selectedProduct=id;
            const selectedProduct = this.initialState.filter(product => product.id===id);
            return selectedProduct[0];
        },
        selectedProduct:[],
        productDataFiltered:[],
        selectedCategories:[],
        showPDP:false,
        selectedProductId:1,
        setProductDetails(id){
            this.selectedProductId=id;
            this.showPDP = true;
            this.selectedProduct = this.initialState.filter(product => product.id===id)[0];
        },
        getProductData: false,
        handleSearch(e){
            const searchQuery= e.target.value;
            this.showPDP = false;
            this.getProductData = true;

            if(!searchQuery || searchQuery===" " ){
                this.products =[...this.initialState];
            }
            if(!this.productDataFiltered.length===0){
                this.products =[...this.productDataFiltered.filter(product => product.productName.toLowerCase().includes(searchQuery.toLowerCase()))]
                console.log(this.productDataFiltered,'this.products')
            }else{
                this.productDataFiltered = [...this.products.filter(product => product.productName.toLowerCase().includes(searchQuery.toLowerCase()))]
                this.products = [...this.productDataFiltered];
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
                console.log(this.productDataFiltered,'productDataFiltered');
                this.productDataFiltered = this.initialState.filter(product => this.selectedCategories.includes(product.category));
                this.products = [...this.productDataFiltered];
            }
            else{
                this.products = [...this.initialState];
            }
            
        }
    }

   
}
