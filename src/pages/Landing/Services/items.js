import servicesMin from './img/services-min.jpg';

export const ITEMS = [
  {
    id: 0,
    icon: 'money-bill-alt',
    itemHeader: 'Product',
    className: 'primary-className',
    itemList: {
      str1: 'Product management',
      str2: 'Agile processes',
      str3: 'Business analysis',
      str4: 'Project management',
    },
  },
  {
    id: 1,
    icon: 'robot',
    itemHeader: 'Machine Learning',
    className: 'warning-className',
    itemList: {
      str1: 'Analysis',
      str2: 'Computer vision',
      str3: 'System controls',
      str4: 'Spech speack',
    },
  },
  {
    id: 2,
    icon: 'laptop',
    itemHeader: 'Engineering',
    className: 'light-blue lighten-1',
    itemList: {
      str1: 'Architecture',
      str2: 'Front end engineering',
      str3: 'Back end engineering',
      str4: 'API  engineering',
    },
  },
  {
    id: 3,
    image: servicesMin,
  },

  {
    id: 4,
    icon: 'cloud',
    itemHeader: 'DevOps',
    className: 'red accent-2',
    itemList: {
      str1: 'Cloud services',
      str2: 'System integration',
      str3: 'System analysis',
      str4: 'Launch strategy',
    },
  },
  {
    id: 5,
    icon: 'hdd',
    itemHeader: 'QA',
    className: 'light-blue lighten-1',
    itemList: {
      str1: 'Automated testing',
      str2: 'Performance testing',
      str3: 'Process improvement',
      str4: 'Test documentation',
    },
  },
];
