type Description = {
  jobTitle: string;
  jobType: string;
  durationFrom: string;
  durationTo: string | null;
  duties: string[];
};
export type Content = {
  id: number;
  title: string;
  body: Description;
};
export interface AwardContent {
  id: string; // Changed from number to string for better uniqueness
  title: string;
  img: string;
  body: {
    description: string;
    date?: string; // Optional date of the award
    category?: string; // Optional category
  };
}

export interface PressMention {
  id: number;
  title: string;
  platform?: string;
  description?: string;
  videoUrl?: string;
  thumbnail?: string;
}
interface IStack {
  name: string;
  src: string;
}

interface IList {
  prefStack: IStack[];
  reactStack: IStack[];
  cssStack: IStack[];
  utilStack: IStack[];
}
export const stacks: IList = {
  prefStack: [
    {
      name: 'React',
      src: 'icons/react.svg'
    },
    {
      name: 'Next',
      src: 'icons/nextjs.svg'
    },
    {
      name: 'Typescript',
      src: 'icons/ts.svg'
    },
    { name: 'Tailwind', src: 'icons/tailwind.svg' }
  ],
  reactStack: [
    {
      name: 'React Query',
      src: 'icons/query.svg'
    },
    { name: 'Redux', src: 'icons/redux.svg' },
    {
      name: 'Sass',
      src: 'icons/sass.svg'
    },
    {
      name: 'Zustand',
      src: 'icons/zustand.svg'
    }
  ],
  cssStack: [
    {
      name: 'Bootstrap',
      src: 'icons/bootstrap2.svg'
    },
    {
      name: 'GSAP',
      src: 'icons/gsap.svg'
    },
    { name: 'CSS', src: 'icons/css.svg' },

    {
      name: 'Material UI',
      src: 'icons/material-ui.svg'
    },
    {
      name: 'Framer Motion',
      src: 'icons/fm.svg'
    }
  ],
  utilStack: [
    {
      name: 'Storybook',
      src: 'icons/storybook.svg'
    },
    {
      name: 'Three.js',
      src: 'icons/threejs.svg'
    },
    {
      name: 'Jest',
      src: 'icons/jest.svg'
    },
    {
      name: 'Supabase',
      src: 'icons/supabase.svg'
    }
  ]
};

export const content: AwardContent[] = [
  {
    id: '1',
    title: 'WINNER BRONZE AL-ALFA AWARD',
    img: '/winnerBronze.png',
    body: {
      description:
        "The international jury for the short film festival of Sidi Mohamed Ben Ouda in Algeria awarded the film 'Underground' with a Bronze Award for its outstanding performance.",
      date: '2022',
      category: 'Film Festival'
    }
  }
  // Add more awards as needed
];

export const pressMentions: PressMention[] = [
  {
    id: 0,
    title: 'Director Hani Khalifa',
    videoUrl: 'https://youtu.be/Racpn7xUWns',
    thumbnail: 'hanikhalifa.png',
    description:
      'At the Ebd3 Festival, director Hany Khalifa spoke about the short film Underground during his talk after watching it.'
  }
];
