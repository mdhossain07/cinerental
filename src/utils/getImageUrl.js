function getImageUrl(value) {
  return new URL(`../assets/movie-covers/${value}`, import.meta.url);
}

export default getImageUrl;
