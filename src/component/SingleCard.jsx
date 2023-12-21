import React from "react";
import "./singlecard.css";

export default function SingleCard(props) {
  return (
    <div className="singleCard">
      <div className="left">
        <div className="logo">
          <img
            src={props.poster}
            alt="img"
          />
          <div className="title">
            <h1>{props.title}</h1>
            <p>2018,hero</p>
            <div className="dura">
              <span className="time">{props.time} </span> {props.action}
            </div>
          </div>
        </div>
        <div className="des">
          <p>
            {props.plot}{props.author}
          </p>
        </div>
        <div class="social-container">
    <div class="like"><i class="fa-solid fa-heart"></i> </div>
    <div class="share"><i class="fa-solid fa-square-share-nodes"></i> </div>
    <div class="comment"><i class="fa-regular fa-comment"></i> </div>
</div>

      </div>
      <div className="right">
        <img
          src={props.banner}
          alt=""
        />
      </div>
    </div>
  );
}
