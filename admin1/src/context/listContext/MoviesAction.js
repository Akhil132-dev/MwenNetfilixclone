export const getListStart = () => ({
  type: "GET_LISTS_START",
});
export const getListSUCCESS = (List) => ({
  type: "GET_LISTS_SUCCESS",
  payload: movies,
});
export const getListfailuer = () => ({
  type: "GET_LISTS_Faliuer",
});
export const deleteMovieStart = () => ({
  type: "DELETE_MOVIES_START",
});
export const DeleteMovieSUCCESS = (id) => ({
  type: "DELETE_MOVIES_SUCCESS",
  payload: id,
});
export const DeleteMoviefailuer = () => ({
  type: "DELETE_MOVIES_Faliuer",
});
export const CreateMovieStart = () => ({
  type: "CREATE_MOVIES_START",
});
export const CreateMovieSUCCESS = (movie) => ({
  type: "CREATE_MOVIES_SUCCESS",
  payload: movie,
});
export const CreateMoviefailuer = () => ({
  type: "CREATE_MOVIES_Faliuer",
});
export const updateMovieStart = () => ({
  type: "UPDATE_MOVIES_START",
});
export const updateMovieSUCCESS = (movie) => ({
  type: "UPDATE_MOVIES_SUCCESS",
  payload: movie,
});
export const updateMoviefailuer = () => ({
  type: "UPDATE_MOVIES_Faliuer",
});
