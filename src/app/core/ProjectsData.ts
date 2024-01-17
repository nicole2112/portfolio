import { Project, ProjectImage } from "../models/project";

const images: Array<ProjectImage> = [
    { name: 'Image 1', sourceUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg' },
    { name: 'Image 2', sourceUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg' },
    { name: 'Image 3', sourceUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg' },
    { name: 'Image 4', sourceUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg' },
    { name: 'Image 5', sourceUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg' }
]

export const projectsData: Array<Project> = [
    { id: 1, title: 'Project A', codeUrl: 'https://github.com/nicole2112/CHART2023', images: images, description: 'With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.'},
    { id: 2, title: 'Project B', codeUrl: 'https://github.com/nicole2112/CHART2023', images: images, description: 'With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.'},
    { id: 3, title: 'Project C', codeUrl: 'https://github.com/nicole2112/CHART2023', images: images, description: 'With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.'},
    { id: 4, title: 'Project D', codeUrl: 'https://github.com/nicole2112/CHART2023', images: images, description: 'With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.'},
    { id: 5, title: 'Project E', codeUrl: 'https://github.com/nicole2112/CHART2023', images: images, description: 'With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.'}
]