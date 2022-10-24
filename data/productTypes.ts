export interface ProductType {
    id: number;
    productName: string;
    tags: string[];
    category: string;
    manufacturerUrl: string;
    description: string[];
    option1?: string | null;
    option2?: string | null;
};