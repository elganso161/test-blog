import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addComments } from "../../../store/postsReducers";

import style from "./BlogCarts.module.css";

const BlogCards = ({ title, img, text, id, likeCount, comments }) => {
  const [newText, setNewText] = useState();
  const dispatch = useDispatch();

  const clickHandler2 = (e) => {
    e.preventDefault();
    let t = e.target;
    if (t.classList.contains("t2")) {
      dispatch(
        addComments({
          a: t.getAttribute("data-key"),
          b: newText,
        })
      );
    }
  };

  return (
    <>
      <div className={style.carts}>
        <div>
          <h2 className={style.cartTitle}>{title}</h2>
          <div className={style.cartContent}>
            <img src={img} alt="картинка" />
            <p>{text}</p>
          </div>
        </div>
        <div className={style.likeBlock}>
          <button className="t1" data-key={id}>
            &#9829;
          </button>
          <div>{likeCount}</div>
        </div>
        <div className={style.cartText}>{comments}</div>
        <div className={style.commentsBlock} onClick={clickHandler2}>
          <textarea
            onChange={(e) => setNewText(e.target.value)}
            data-key={id}></textarea>
          <button className="t2" data-key={id}>
            Добавить комментарий
          </button>
        </div>
      </div>
    </>
  );
};

export default BlogCards;
