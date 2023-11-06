import { Link, useLoaderData, Form } from "react-router-dom";

// destructuring the props needed to get our post, including router prop match
const Show = () => {
  const post = useLoaderData();

  ////////////////////
  // Styles
  ///////////////////
  const div = {
    textAlign: "center",
    border: "3px solid green",
    width: "80%",
    margin: "30px auto",
  };

  return (
    <div style={div}>
      <h1>{post.subject}</h1>
      <h2>{post.details}</h2>
      <div style={{ textAlign: "center" }}>
        <h2>Order</h2>
        <Form action={`/update/${post.id}`} method="post">
          <input
            type="text"
            name="subject"
            placeholder="write subject here"
            defaultValue={post.subject}
          />
          <input
            type="text"
            name="details"
            placeholder="write details here"
            defaultValue={post.details}
          />
          <input
            type="text"
            name="sides"
            placeholder="write details here"
            defaultValue={post.sides}
          />
          <input
            type="text"
            name="substitutions"
            placeholder="write details here"
            defaultValue={post.substitutions}
          />
          <button>Update Order</button>
        </Form>
        <Form action={`/delete/${post.id}`} method="post">
          <button>Cancel Order</button>
        </Form>
      </div>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default Show;
