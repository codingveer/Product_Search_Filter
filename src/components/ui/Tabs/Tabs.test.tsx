import { describe, it } from "vitest";
import { render, screen } from '@testing-library/react';
import Tabs from './Tabs';

describe('Tabs', () => {
    const tabsData = [{
        id: 1,
        label: "Product",
        disabled: false,
    },
    {
        id: 2,
        label: "Addresses",
        disabled: true,
    },
    {
        id: 3,
        label: "Overview",
        disabled: true,
    }];
    it('renders Tabs'), () => {
        render(<Tabs children={[]} {...tabsData} />)
        screen.debug();
    }
    
});
