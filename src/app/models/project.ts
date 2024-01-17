export interface Project {
    id: number;
    title: string;
    description: string;
    images: Array<ProjectImage>;
    codeUrl: string;
}

export interface ProjectImage {
    name: string;
    sourceUrl: string;
}
