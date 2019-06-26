export default inputID => {
  const settings =

      inputID !== 'style-img' ? [
        {
          id: '11',
          title: 'Random',
          type: 'RANDOM_CONTENT',
          icon: 'random',
        },
      ] :
      [
        {
          id: '1',
          title: 'Random',
          type: 'RANDOM_IMAGE',
          icon: 'random',
        },
      ];

  return settings;
};
