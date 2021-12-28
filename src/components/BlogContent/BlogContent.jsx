import React, { useState } from "react";
import style from "./BlogContent.module.css";
import { useSelector, useDispatch } from "react-redux";
import { selectBlogState, increment } from "../../store/postsReducers";
import BlogCards from "./BlogCarts/BlogCarts";

const BlogContent = () => {
  const postsItem = useSelector(selectBlogState);
  const dispatch = useDispatch();
  const [searchTheme, setSearchTheme] = useState("");

  const clickHandler = (e) => {
    e.preventDefault();
    let t = e.target;
    if (t.classList.contains("t1")) {
      dispatch(increment(t.getAttribute("data-key")));
    }
  };

  return (
    <>
      <div>
        <input
          className={style.searchInput}
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            setSearchTheme(e.target.value);
          }}
        />
      </div>
      <div className={style.blogContent} onClick={clickHandler}>
        {postsItem
          .filter((val) => {
            if (searchTheme == "") {
              return val;
            } else if (
              val.theme.toLowerCase().includes(searchTheme.toLowerCase())
            ) {
              return val;
            }
          })
          .map((item) => (
            <BlogCards
              key={item.id}
              id={item.id}
              articul={item.articul}
              title={item.title}
              text={item.text}
              img={item.img}
              likeCount={item.likeCount}
              comments={item.comments}
            />
          ))}
      </div>
    </>
  );
};

export default BlogContent;
