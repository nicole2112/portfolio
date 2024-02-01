export interface Project {
    id: number;
    title: string;
    description: string;
    images: Array<ProjectImage>;
    codeUrl?: string;
    prodUrl?: string;
    order?: number;
    hidden?: boolean;
    tags?: Array<string>;
}

export interface ProjectImage {
    name: string;
    sourceUrl: string;
}
