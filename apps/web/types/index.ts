export interface SearchFilterbarProps {
    searchQuery: string;
    onSearchChange: (query: string) => void;
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
}

export interface Tool {
    id: string;
    name: string;
    description: string;
    category: string;
    tags: string[];
    rating: number;
    isNew?: boolean;
    isTrending?: boolean;
    logo: string;

}

export interface ToolCardProps {
    tool: Tool;
    index: number;
}