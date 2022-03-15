import React from "react";
import { YoutubeData } from "../../data";
import YoutubeItem from "./YoutubeItem";

const YoutubeList = (props) => {
  console.log(props);
  return (
    <div className="youtube-list">
      {props.children}
      {YoutubeData.map((item, index) => {
        let newclass = "";
        if (index === 1) newclass = "abc";
        {
          {
            /* const newClass = index === 1 ? "abc" : ""; */
          }
        }
        return (
          <YoutubeItem
            key={item.id}
            image={item.image}
            avatar={item.avatar || item.image}
            title={item.title}
            author={item.author}
            classname={newclass}
          ></YoutubeItem>
        );
      })}
      ;
      {/* <Feature></Feature>
      <Feature></Feature>
      <Feature></Feature> */}
      {/* <YoutubeItem
        image="https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
        avatar="https://images.unsplash.com/photo-1644520964111-18c8e0fdf085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
        title="Learning React1"
        author="Evondev"
      ></YoutubeItem>
      <YoutubeItem
        image="https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
        avatar="https://images.unsplash.com/photo-1644520964111-18c8e0fdf085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
        title="Learning React2"
        author="Evondev"
      ></YoutubeItem>
      <YoutubeItem
        image="https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
        avatar="https://images.unsplash.com/photo-1644520964111-18c8e0fdf085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
        title="Learning React3"
        author="Evondev"
      ></YoutubeItem>
      <YoutubeItem
        image="https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
        avatar="https://images.unsplash.com/photo-1644520964111-18c8e0fdf085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
        title="Learning React4"
        author="Evondev"
      ></YoutubeItem> */}
    </div>
  );
};

export default YoutubeList;
