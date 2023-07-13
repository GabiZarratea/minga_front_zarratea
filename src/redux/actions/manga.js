export const setManga = (manga) => {
  return {
    type: "SET_MANGA",
    payload: manga,
  };
};

export const setChapters = (chapters) => {
  return {
    type: "SET_CHAPTERS",
    payload: chapters,
  };
};

export const setPagination = (pagination) => {
  return {
    type: "SET_PAGINATION",
    payload: pagination,
  };
};
