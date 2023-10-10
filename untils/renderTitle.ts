const renderTitle = (name: string) => {
  const title = name.split('-');
  title[title.length - 1] = `(${title[title.length - 1]})`;
  return title.join(' ');
};

export default renderTitle;
