const URL = "https://project4testbackend.onrender.com";

//indexLoader => get all todos for index route
export const indexLoader = async () => {
  const response = await fetch(URL + "/todos/");
  const todos = await response.json();
  return todos;
};

//showLoader => get a single todo for Show route
export const showLoader = async ({ params }) => {
  const response = await fetch(URL + `/todos/${params.id}/`);
  const todo = await response.json();
  return todo;
};
