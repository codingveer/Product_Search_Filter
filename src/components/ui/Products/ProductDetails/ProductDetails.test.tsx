import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProductDetails from './ProductDetails';

describe('ProductList', () => {
    it('Renders Product List', () => {
        render(<ProductDetails/>);
    })
})