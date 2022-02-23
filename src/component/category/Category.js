import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actionCreators as categoryCreators } from "../../redux/modules/video";
import "./_category.css";

export const category__list = [
  "전체",
  "스피드스케이팅",
  "봅슬레이",
  "스노보드",
  "스키점프",
  "스켈레톤",
  "쇼트트랙 스피드 스케이팅",
  "아이스하키",
  "컬링",
  "피겨 스케이팅",
  "프리스타일 스키",
];
function Category(props) {
  const setCategory = props.setCategory;
  const [select, setSelect] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(categoryCreators.selectCategory(e.currentTarget.id));
    setSelect(e.currentTarget.id);
    setCategory(e.currentTarget.id);
  };

  const scrollRef = React.useRef();
  const scollToMyRef = () => {
    const scroll =
      scrollRef.current.scrollHeight - scrollRef.current.clientHeight;
    scrollRef.current.scrollTo(0, scroll);
  };

  return (
    <>
      <hr />
      <div className="category__list">
        {category__list.map((e, i) => {
          return (
            <div
              key={e}
              onClick={handleClick}
              id={i}
              className={select === `${i}` ? "category__selected" : "category"}
            >
              <div className="_font">{e}</div>
            </div>
          );
        })}
      </div>
      <hr />
    </>
  );
}

export default Category;
