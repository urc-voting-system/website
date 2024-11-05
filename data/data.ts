export const eventData = [
  {
    id: 1,
    imageSrc: "/gallerybanne.png",
    eventDate: "05-08-2024",
    eventTime: "8:00 am - 4:00 pm GMT",
    title: "Cybersecurity Conference",
    location: "KNUST, Kumasi",
  },
  {
    id: 2,
    imageSrc: "/event.jpg",
    eventDate: "11-09-2024",
    eventTime: "12:00 pm - 6:00 pm GMT",
    title: "Future of Web Development Expo",
    location: "Alisa Hotel, Accra",
  },
  {
    id: 3,
    imageSrc: "/projectbanner.png",
    eventDate: "25-10-2024",
    eventTime: "11:00 am - 3:00 pm GMT",
    title: "Startup Funding Fair 2024",
    location: "Silicon House, Accra",
  },
  {
    id: 4,
    imageSrc: "/event.jpg",
    eventDate: "11-09-2024",
    eventTime: "12:00 pm - 6:00 pm GMT",
    title: "Future of Web Development Expo",
    location: "Alisa Hotel, Accra",
  },
  {
    id: 5,
    imageSrc: "/projectbanner.png",
    eventDate: "25-10-2024",
    eventTime: "11:00 am - 3:00 pm GMT",
    title: "Startup Funding Fair 2024",
    location: "Silicon House, Accra",
  },
];

export const leaders = [
  {
    id: 1,
    name: "OBENG PHILEMON",
    position: "President",
    department: "Electrical & Electronic Engineering",
    level: "L400",
    image: "/profiles/scot.jpg",
  },
  {
    id: 2,
    name: "EMMANUEL ",
    position: "Vice President",
    department: "Electrical & Electronic Engineering",
    level: "L300",
    image: "/profiles/emma.jpg",
  },
  {
    id: 3,
    name: "ALEXANDER ",
    position: "General Secretary",
    department: "Electrical & Electronic Engineering",
    level: "L200",
    image: "/profiles/alex.jpg",
  },
  {
    id: 4,
    name: "KENNETH",
    position: "Project Manager",
    department: "Electrical & Electronic Engineering",
    level: "L400",
    image: "/profiles/ken.jpg",
  },
  {
    id: 5,
    name: " AYISHA ",
    position: "Financial Secretary",
    department: "Electrical & Electronic Engineering",
    level: "L300",
    image: "/profiles/sec.jpg",
  },
  {
    id: 6,
    name: "Joel Senyo",
    position: "Public Relations Officer (P.R.O)",
    department: "Computer Engineering",
    level: "L300",
    image: "/profiles/joe.jpg",
  },
];
interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
}

export const posts: Post[] = [
  {
    id: "1",
    title: "First Blog Post",
    excerpt: "This is the excerpt for the first blog post.",
    content: "<p>This is the content of the first blog post.</p>",
    date: "2024-01-01",
    image: "/profiles/scot.jpg",
  },
  {
    id: "2",
    title: "Second Blog Post",
    excerpt: "This is the excerpt for the second blog post.",
    content: "<p>This is the content of the second blog post.</p>",
    date: "2024-01-02",
    image: "/profiles/ken.jpg",
  },
];

export const getPosts = async (): Promise<Post[]> => {
  return posts;
};

export const getPostById = async (id: string): Promise<Post | undefined> => {
  return posts.find((post) => post.id === id);
};


export 
const projectsData = [
  {
    id: 1,
    title: "Project Curiosity",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    duration: "3rd October 2021 - 14th December 2023",
    imageUrl: "/event.png", 
  },
  {
    id: 2,
    title: "Project Exploration",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    duration: "1st January 2023 - Present",
    imageUrl: "/event.png", 
  },

];


export const galleryData = [
  {
    title: "TECH FEST 2.0",
    images: [
      "/tech1.jpg",
      "/tech2.jpg",
      "/tech3.jpg",
      "/tech4.jpg",
      "/tech5.jpg",
      "/tech6.jpg",
    ],
  },
  {
    title: "STEM FESTIVAL 2021",
    images: [
      "/stem1.webp",
      "/stem2.webp",
      "/stem3.webp",
      "/stem4.webp",
    ],
  },
  {
    title: "GLOBAL MONITORING FOR ENVIRONMENT & SECURITY INCUBATION CHALLENGE 2021",
    images: [
      "/global1.webp",
      "/global2.webp",
      "/global3.webp",
      "/global4.webp",
    ],
  },
  {
    title: "NATIONAL ENERGY QUIZ & INNOVATION CHALLENGE",
    images: [
      "/National2.webp",
      "/National1.webp",
      "/National3.webp",
      "/National4.webp",
    ],
  },
];
