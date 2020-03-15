export const bingImage = (imageName) => {
  const name = imageName.toLowerCase().replace(/ /g, '+');

  return `https://tse2.mm.bing.net/th?q=${name}+star+wars&c=7&rs=1&p=0&dpr=1&pid=1.7&mkt=en-US&adlt=on`;
};

export default { bingImage };
