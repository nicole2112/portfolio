export interface Project {
    id: number;
    title: string;
    description: string;
    images: Array<ProjectImage>;
    codeUrl: string;
}

interface ProjectImage {
    name: string;
    sourceUrl: string;
}
