interface NavbarProps {
    className?: string;
}

interface SEOHeadProps {
    titleString: string;
    description?: string;
}


interface ModelData {
    _id: string;
    title: string;
    shortDescription: string;
    longDescription: string;
    category: string;
    useCases: string;
    cover: string;
    developedBy: string;
    stars?: number;
    downloads?: number;
    updatedAt?: string;
}

export type { NavbarProps, SEOHeadProps, ModelData };