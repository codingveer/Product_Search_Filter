interface TabList {
    id: number;
    label: string;
    disabled: boolean;
}

export const TabList: TabList[] = [
    {
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
    },
];
