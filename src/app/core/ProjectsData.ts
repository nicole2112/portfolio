import { Project, ProjectImage } from "../models/project";

const images: Array<ProjectImage> = [
    { name: 'Image 1', sourceUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg' },
    { name: 'Image 2', sourceUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg' },
    { name: 'Image 3', sourceUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg' },
    { name: 'Image 4', sourceUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg' },
    { name: 'Image 5', sourceUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg' }
]

const chartProjectImages: Array<ProjectImage> = [
    { name: 'Login', sourceUrl: '/assets/images-projects/chart2023/img1.png' },
    { name: 'Screen 1: Image Assignment', sourceUrl: '/assets/images-projects/chart2023/img2.png' },
    { name: 'Screen 2: Image Annotation', sourceUrl: '/assets/images-projects/chart2023/img3.png' },
    { name: 'Screen 3: Image Validation', sourceUrl: '/assets/images-projects/chart2023/img4.png' },
]

const fundacionProjectImages: Array<ProjectImage> = [
    { name: 'Landing page', sourceUrl: '/assets/images-projects/fundaPadrino/img1.png' },
    { name: 'Landing page: Testimony', sourceUrl: '/assets/images-projects/fundaPadrino/img2.png' },
    { name: 'Landing page: Contact', sourceUrl: '/assets/images-projects/fundaPadrino/img3.png' },
    { name: 'Landing page: Blog', sourceUrl: '/assets/images-projects/fundaPadrino/img4.png' },
    { name: 'Administrative login page', sourceUrl: '/assets/images-projects/fundaPadrino/img5.png' },
    { name: 'Administrative heroes section management', sourceUrl: '/assets/images-projects/fundaPadrino/img6.png' },
    { name: 'Administrative heroes sectio management', sourceUrl: '/assets/images-projects/fundaPadrino/img8.png' },
    { name: 'Heroes Section', sourceUrl: '/assets/images-projects/fundaPadrino/img7.png' },
]

export const projectsData: Array<Project> = [
    { id: 1, order:1, hidden:false, title: 'Chart Classification', tags:['Angular', 'Firebase'], codeUrl: 'https://github.com/nicole2112/CHART2023', prodUrl: 'https://chart2023project.web.app/', images: chartProjectImages, description: 'With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.'},
    { id: 2, order:2, title: 'Fundación Padrino', tags:['Angular', 'Bootstrap', 'Firebase'], codeUrl: 'https://github.com/nicole2112/Proyecto_ISW', prodUrl:"https://fundacionpadrino.org/pagina-principal", images: fundacionProjectImages, description: 'With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.'},
    { id: 3, title: 'Project C', prodUrl: 'https://github.com/nicole2112/CHART2023', images: images, description: 'With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.'},
    { id: 4, title: 'Project D', images: images, description: 'With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.'},
    { id: 5, title: 'Project E', codeUrl: 'https://github.com/nicole2112/CHART2023', images: images, description: 'With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.'},
    { id: 3, title: 'Project C', prodUrl: 'https://github.com/nicole2112/CHART2023', images: images, description: 'With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.'},
    { id: 4, title: 'Project D', images: images, description: 'With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.'},
    { id: 5, title: 'Project E', codeUrl: 'https://github.com/nicole2112/CHART2023', images: images, description: 'With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.'}
]