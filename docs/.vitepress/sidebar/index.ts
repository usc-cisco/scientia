export const sidebar = {
  '/courses/': [
    {
      text: 'Introduction',
      items: [
        { text: 'What is Scientia?', link: '/courses/' },
        { text: 'General Resources', link: '/courses/general-resources/' },
      ],
    },
    {
      text: 'CIS 1101: Programming I',
      collapsed: true,
      items: [
        {
          text: 'Introduction',
          link: '/courses/cis1101/',
        },
        {
          text: 'Algorithm',
          link: '/courses/cis1101/algorithm/',
        },
        {
          text: 'Resources',
          link: '/courses/cis1101/resources/',
        },
      ],
    },
    {
      text: 'CIS 1201: Programming II',
      collapsed: true,
      items: [
        {
          text: 'Resources',
          link: '/courses/cis1102/resources/',
        },
      ],
    },
    {
      text: 'CIS 2101: DSA',
      collapsed: true,
      items: [
        {
          text: 'Resources',
          link: '/courses/cis2101/resources/',
        },
      ],
    },
  ],
};
