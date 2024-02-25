import { Project, ProjectImage } from "../models/project";

const images: Array<ProjectImage> = [
    { name: 'Image 1', sourceUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg' },
    { name: 'Image 2', sourceUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg' },
    { name: 'Image 3', sourceUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg' },
    { name: 'Image 4', sourceUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg' },
    { name: 'Image 5', sourceUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg' }
]

const chartProjectImages: Array<ProjectImage> = [
    { name: 'Login', sourceUrl: '/nicole2112/assets/images-projects/chart2023/img1.png' },
    { name: 'Screen 1: Image Assignment', sourceUrl: '/nicole2112/assets/images-projects/chart2023/img2.png' },
    { name: 'Screen 2: Image Annotation', sourceUrl: '/nicole2112/assets/images-projects/chart2023/img3.png' },
    { name: 'Screen 3: Image Validation', sourceUrl: '/nicole2112/assets/images-projects/chart2023/img4.png' },
]

const fundacionProjectImages: Array<ProjectImage> = [
    { name: 'Landing page', sourceUrl: '/nicole2112/assets/images-projects/fundaPadrino/img1.png' },
    { name: 'Landing page: Testimony', sourceUrl: '/nicole2112/assets/images-projects/fundaPadrino/img2.png' },
    { name: 'Landing page: Contact', sourceUrl: '/nicole2112/assets/images-projects/fundaPadrino/img3.png' },
    { name: 'Landing page: Blog', sourceUrl: '/nicole2112/assets/images-projects/fundaPadrino/img4.png' },
    { name: 'Administrative login page', sourceUrl: '/nicole2112/assets/images-projects/fundaPadrino/img5.png' },
    { name: 'Administrative heroes section management', sourceUrl: '/nicole2112/assets/images-projects/fundaPadrino/img6.png' },
    { name: 'Administrative heroes sectio management', sourceUrl: '/nicole2112/assets/images-projects/fundaPadrino/img8.png' },
    { name: 'Heroes Section', sourceUrl: '/nicole2112/assets/images-projects/fundaPadrino/img7.png' },
]

export const projectsData: Array<Project> = [
    { id: 1, order:1, hidden:false, title: 'Chart Classification', tags:['Angular', 'Firebase'], codeUrl: 'https://github.com/nicole2112/CHART2023', prodUrl: 'https://chart2023project.web.app/', images: chartProjectImages, description: 'This project was used as a tool for the development of a dataset used in the research “CHART-Info 2024: A dataset for Chart Analysis and Recognition”. It consisted in classifying over 300k charts (PNG format) by their type eg. area, scatter, bar, map, venn. Each chart had a pre-classification, which must be reviewed manually. Three types of user’s roles were used: assigner, annotator, and validator. Each role represents a different task used in the app. Assignment consisted in assigning groups of images to other users. Annotation displays each chart assigned to a user, with the pre-classification data. The user must correct the classification and annotate each chart. Last, another user can validate the annotated charts displayed in a gridview. If the user accepts the selected charts, they are ready and their classification process finishes. If they are rejected, they return to the assignment stage with a flag that indicates they have already been annotated wrongly. For the development of the dataset, 6 researchers used this tool for chart classification.'},
    { id: 2, order:2, title: 'Fundación Padrino', tags:['Angular', 'Bootstrap', 'Firebase'], codeUrl: 'https://github.com/nicole2112/Proyecto_ISW', prodUrl:"https://fundacionpadrino.org/pagina-principal", images: fundacionProjectImages, description: 'Fundación Padrino is a non-profit organization that help people with kidney failure. This class project consisted in the development of a website for informing society about the NGO`s labor. Also an administrative portal from where they can manage the content displayed in the website and automate some internal processes. Processes such as registration forms, forms for different requests eg.,  supplies, medical assistance equipment. Other features contained in the portal are user`s and blog management and the handling of websites sections such as testimonies and heroes.'},
    // { id: 3, title: 'Project C', prodUrl: 'https://github.com/nicole2112/CHART2023', images: images, description: 'With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.'},
    // { id: 4, title: 'Project D', images: images, description: 'With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.'},
    // { id: 5, title: 'Project E', codeUrl: 'https://github.com/nicole2112/CHART2023', images: images, description: 'With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.'},
    // { id: 3, title: 'Project C', prodUrl: 'https://github.com/nicole2112/CHART2023', images: images, description: 'With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.'},
    // { id: 4, title: 'Project D', images: images, description: 'With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.'},
    // { id: 5, title: 'Project E', codeUrl: 'https://github.com/nicole2112/CHART2023', images: images, description: 'With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.'}
]