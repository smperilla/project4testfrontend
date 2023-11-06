import Post from "../components/Post";
import { useLoaderData } from "react-router-dom";
import { Form } from "react-router-dom";

const Index = (props) => {
  const todos = useLoaderData();
  // For each post in the array render a Post component
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h2>Create An Order</h2>
        <Form action="/create" method="post">
          <input type="text" name="subject" placeholder="Food" />
          <input type="text" name="details" placeholder="Drinks" />
          <input type="text" name="sides" placeholder="Sides" />
          <input type="text" name="substitutions" placeholder="Substitutions" />
          <button>Create New Order</button>
        </Form>
      </div>
      {todos.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </>
  );
};

export default Index;
