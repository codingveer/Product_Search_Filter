import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProductList from './ProductList';

describe('ProductList', () => {
    test('Renders Product List', () => {
        const products = [{
            "id": 1,
            "productName": "Foxit software PhantomPDF Standard",	
            "tags": [ "PDF", "Change", "Create", "Maintenance", "Business", "FoxIT" ],
            "category": "Daily Business",
            "manufacturerUrl": "https://www.foxitsoftware.com/de/pdf-editor",
            "description": 
            [
                "PhantomPDF provides powerful PDF Editor capabilities to allow authors to update their documents themselves.",
                "Standard - Simple interface and limited functionality."
            ],
            "option1": "1 Year Maintenance",
            "option2": "Without Maintenance"
        },
        {
            "id": 2,
            "productName": "Foxit Software PhantomPDF Business",
            "tags": [],
            "category": "Daily Business",
            "manufacturerUrl": "https://www.foxitsoftware.com/de/pdf-editor",
            "description": 
            [
                "PhantomPDF provides powerful PDF Editor capabilities to allow authors to update their documents themselves.",
                "Business - Advances capabilities, complete lifecycle solution."
            ],
            "option1": "1 Year Maintenance",
            "option2": "Without Maintenance"
        },]
        render(<ProductList/>);
    })
})