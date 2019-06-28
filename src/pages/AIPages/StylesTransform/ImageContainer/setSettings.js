export default inputID => {
  const settings =
    inputID !== "style-img"
      ? [
          {
            id: "11",
            title: "Random",
            type: "RANDOM_CONTENT",
            icon: "random"
          }
        ]
      : [
          {
            id: "1",
            title: "Random",
            type: "RANDOM_IMAGE",
            icon: "random"
          }
        ];

  return settings;
};

export const setSrc = (src, element) => {
  const imgSrc =
    element.current && element.current.src.length > 100000
      ? element.current.src
      : src;

  return imgSrc;
};
