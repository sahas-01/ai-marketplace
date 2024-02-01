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
    stars?: number | 0 | undefined;
    downloads?: number | 0 | undefined;
    updatedAt?: string;
}

interface ModelInfoAboutProps {
    title: string;
    shortDescription: string;
    category: string;
    developedBy: string;
    downloads?: number;
    stars?: number;
    cover?: string;
}

interface DetailAboutProps {
    longDescription: string;
}

interface UseCasesProps {
    useCases: string;
}

export type { NavbarProps, SEOHeadProps, ModelData, ModelInfoAboutProps, DetailAboutProps, UseCasesProps };