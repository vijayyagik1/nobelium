import React, { useState, useEffect } from "react";
import styles from "./First.css";

export default function First() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => resp.json())
      .then((res) => setPost(res));
  }, []);

  console.log(post);

  const handelDelete = (Id) => {
    const newData = post.filter((ele) => ele.id != Id);
    setPost(newData);
  };

  return (
    <div>
      <h1>First Task</h1>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>UserId</th>
            <th>Title</th>
            <th>Body</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {post.map((post) => {
            return (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.userId}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td className={styles.delete} onClick={() => handelDelete(post.id)}>❌</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}