export interface IProject {
  name: string;
  description: string;
  production?: boolean;
  stack: string[];
  links: {
    github: string | null;
    live: string | null;
  };
  thumbnail: string;
}

export const Projects: IProject[] = [
  {
    name: 'Heya - هي',
    description: `A short documentary film that follows the story of a woman who has spent her entire life working in Human Resources. At the age of forty, she decides to leave her stable career behind and pursue her true passion — yoga. The film explores her journey of self-discovery, courage, and transformation.`,
    stack: ['Documentary', 'Storytelling', 'Editing', 'Direction'],
    links: {
      github: null,
      live: 'https://www.instagram.com/reel/C3gEqqzsYi-/?utm_source=ig_web_copy_link'
    },
    thumbnail: '/heya.png'
  },
  {
    name: 'Underground - تحت الأرض',
    description: `“Underground” is a short documentary film that follows the inspiring stories of four artists from Alexandria, Egypt. The film traces their journeys from humble beginnings to recognition, exploring how they faced challenges, setbacks, and negative criticism along the way.
It also highlights how the city of Alexandria — with its atmosphere, people, and culture — shaped their artistic identity and fueled their resilience and creativity.
The film was officially selected in six film festivals and won an award at the International Documentary Film Festival of Sidi Mohamed Ben Ouda in Algeria.`,
    stack: [''],
    links: {
      github: null,
      live: 'https://drive.google.com/file/d/12cGav-WYgXp6lvm4hZfhjVqYR5xujGLq/view?usp=sharing'
    },
    thumbnail: '/underground.jpg'
  },

  {
    name: 'Future Uber - اوبر المستقبل',
    description: `A short comedy film where a man orders a car, only to be picked up by a driver who turns out to be himself — from the future. The unexpected encounter leads to humorous and thought-provoking conversations as the future self gives him bold advice and mysterious warnings.`,
    stack: ['Short Film', 'Comedy', 'Screenwriting', 'Direction'],
    links: {
      github: null,
      live: 'https://drive.google.com/file/d/1r738szROM5bJ0TOMxM28wYeMDjDwQ99Y/view?usp=sharing'
    },
    thumbnail: '/uber.png'
  },

  {
    name: 'Ramadan Kareem - رمضان كريم',
    description: `A heartfelt short film that captures the emotions of a man spending the first day of Ramadan away from his family in Malaysia. Through quiet moments and nostalgic memories, the film explores loneliness, belonging, and the deep connection between faith and home.`,
    stack: ['Short Film', 'Drama', 'Cinematography', 'Editing'],
    links: {
      github: null,
      live: 'https://drive.google.com/file/d/1yGbF776yraDqgCs0-jmeZRlQXBQn5-_l/view?usp=sharing'
    },
    thumbnail: '/ramdankareem.png'
  },

  {
    name: 'Schizophrenia - انفصام',
    description: `A psychological short film told from the perspective of a man struggling with schizophrenia. The film blurs the line between reality and illusion, immersing the viewer inside the character’s fragmented mind and revealing the unseen layers of his perception.`,
    stack: ['Short Film', 'Psychological', 'Cinematography', 'Sound Design'],
    links: {
      github: 'https://github.com/Hazemelhelbawi/ecommerce_task',
      live: 'https://drive.google.com/file/d/1tN5xdJDbAWtLjVmrM3-QDiiZNSTEEP4p/view?usp=sharing'
    },
    thumbnail: '/Schizophrenia.png'
  }
];
