import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProductFilters from './ProductFilters';


describe('ProductFilter', () => {
    it('Renders Product List', () => {
        render(<ProductFilters/>);
    })
})