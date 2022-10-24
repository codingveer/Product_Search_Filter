import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProductCard from './ProductCard';


describe('ProductCard', () => {
    const productData ={
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
	}
    test('Renders Product List', () => {
        render(<ProductCard product={productData}/>);
    })
})