export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'matmult',
    // subtitle: 'matmult',
    description: `matmult's blog`,
    image: {
        src: '/dante-preview.jpg',
        alt: 'main'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Projects',
            href: '/projects'
        }
        // {
        //     text: 'Tags',
        //     href: '/tags'
        // }
    ],
    // footerNavLinks: [
    //     {
    //         text: 'About',
    //         href: '/about'
    //     },
    //     {
    //         text: 'Contact',
    //         href: '/contact'
    //     }
    //     {
    //         text: 'Terms',
    //         href: '/terms'
    //     },
    //     {
    //         text: 'Download theme',
    //         href: 'https://github.com/JustGoodUI/dante-astro-theme'
    //     }
    // ],
    // socialLinks: [
    //     {
    //         text: 'Dribbble',
    //         href: 'https://dribbble.com/'
    //     },
    //     {
    //         text: 'Instagram',
    //         href: 'https://instagram.com/'
    //     },
    //     {
    //         text: 'X/Twitter',
    //         href: 'https://twitter.com/'
    //     }
    // ],
    hero: {
        // title: 'Hi There & Welcome to My Corner of the Web!',
        // text: "I'm **Ethan Donovan**, a web developer at Amazing Studio, dedicated to the realms of collaboration and artificial intelligence. My approach involves embracing intuition, conducting just enough research, and leveraging aesthetics as a catalyst for exceptional products. I have a profound appreciation for top-notch software, visual design, and the principles of product-led growth. Feel free to explore some of my coding endeavors on <a href='https://github.com/JustGoodUI/dante-astro-theme'>GitHub</a> or follow me on <a href='https://twitter.com/justgoodui'>Twitter/X</a>.",
        text: `As a dedicated machine learning researcher, I am deeply immersed in the exploration and development of advanced algorithms and models that push the boundaries of artificial intelligence. My work involves rigorous experimentation, data analysis, and the application of cutting-edge techniques to solve complex problems. I leverage a robust understanding of mathematics, statistics, and computer science to innovate and optimize machine learning systems. My research often intersects with various domains,including natural language processing, computer vision, and reinforcement learning, aiming to create intelligent systems that can learn and adapt autonomously.`,
        // image: {
        //     src: '/hero.jpeg',
        //     alt: 'A person sitting at a desk in front of a computer'
        // },
        actions: [
            {
                text: 'About',
                href: '/about'
            }
        ]
    },
    // subscribe: {
    //     title: 'Subscribe to Dante Newsletter',
    //     text: 'One update per week. All the latest posts directly in your inbox.',
    //     formUrl: '#'
    // },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
