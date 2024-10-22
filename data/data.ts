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
    name: "John Doe",
    position: "President",
    department: "Electrical & Electronic Engineering",
    level: "L400",
    image: "/profiles/scot.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Vice President",
    department: "Electrical & Electronic Engineering",
    level: "L300",
    image: "/profiles/emma.jpg",
  },
  {
    id: 3,
    name: "Alex Johnson",
    position: "General Secretary",
    department: "Electrical & Electronic Engineering",
    level: "L200",
    image: "/profiles/alex.jpg",
  },
  {
    id: 4,
    name: "Ken Adams",
    position: "Project Manager",
    department: "Electrical & Electronic Engineering",
    level: "L400",
    image: "/profiles/ken.jpg",
  },
  {
    id: 5,
    name: "Sarah Lee",
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
