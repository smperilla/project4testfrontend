import { redirect } from "react-router-dom";

// YOUR DEPLOYED API BASE URL
const URL = "https://project4testbackend.onrender.com";

//createAction => create a todo from form submissions to `/create`
export const createAction = async ({ request }) => {
  // get form data
  const formData = await request.formData();

  // construct request body
  const newTodo = {
    subject: formData.get("subject"),
    details: formData.get("details"),
    sides: formData.get("sides"),
    substitutions: formData.get("substitutions"),
  };

  // send request to backend
  await fetch(URL + "/todos/", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });

  // redirect back to index page
  return redirect("/");
};

//updateAction => update a todo from form submissions to `/update/:id`
export const updateAction = async ({ request, params }) => {
  // get form data
  const formData = await request.formData();

  // get todo id
  const id = params.id;

  // construct request body
  const updatedTodo = {
    subject: formData.get("subject"),
    details: formData.get("details"),
    sides: formData.get("sides"),
    substitutions: formData.get("substitutions"),
  };

  // send request to backend
  await fetch(URL + `/todos/${id}/`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedTodo),
  });

  // redirect back to show page page
  return redirect(`/post/${id}`);
};

//deleteAction => delete a todo from form submissions to `/delete/:id`
export const deleteAction = async ({ params }) => {
  // get todo id
  const id = params.id;

  // send request to backend
  await fetch(URL + `/todos/${id}/`, {
    method: "delete",
  });

  // redirect back to show page page
  return redirect("/");
};
