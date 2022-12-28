function prepare(texto) {
  const textInHtml = texto.map((frase) => {
    const paragrafo = frase.trim().split(' ');
    const inHtml = paragrafo.map((word) => {
      if (word[0] === '/') {
        const w = word.split('/')[1];
        return `<skr>${w}</skr>`;
      }
      return word;
    });
    return inHtml.join(' ');
  });
  return textInHtml;
}

export default prepare;
