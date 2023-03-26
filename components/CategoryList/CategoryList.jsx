import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "@/api/axios";
import useCategoryItem from "@/store/useCategoryItem";

const Wrapper = styled.div`
  max-width: 99%;
  margin: 0 auto;
`;
const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  &::-webkit-scrollbar {
    display: none;
  }
  overflow: scroll;
`;
const ListItem = styled.li`
  padding: 0.5rem 1.5rem;
  font-size: 1.4rem;
  background-color: ${(props) =>
    props.isActive ? props.theme.colorText : props.theme.colorAccent};
  color: ${(props) =>
    props.isActive ? props.theme.colorBg : props.theme.colorText};
  border-radius: 5px;
  cursor: pointer;
`;
const MyComponent = () => {
  const [categoryList, setCategoryList] = useState([]);
  const { isActive, setIsActive } = useCategoryItem();
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `/videoCategories?part=snippet&regionCode=US&key=${process.env.API_KEY}`
      );
      console.log(response.data.items);
      response.data.items.length = 20;
      setCategoryList(response.data.items);
    })();
  }, []);

  return (
    <Wrapper>
      <List>
        <ListItem
          onClick={() => setIsActive(false)}
          isActive={!isActive && true}
        >
          All
        </ListItem>
        {categoryList.map((item) => {
          return (
            <ListItem
              onClick={() => setIsActive(item.id)}
              isActive={item.id === isActive}
              key={item.id}
            >
              {item.snippet.title.split(" ")[0]}
            </ListItem>
          );
        })}
      </List>
    </Wrapper>
  );
};

export default MyComponent;
