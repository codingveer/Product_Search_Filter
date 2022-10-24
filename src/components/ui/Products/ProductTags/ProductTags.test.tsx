import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProductTag from './ProductTags';

describe('ProductTag', () => {
    it('Renders Product List', () => {
        render(<ProductTag tags={[]}/>);
    })
})