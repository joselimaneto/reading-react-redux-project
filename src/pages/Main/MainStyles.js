import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  margin: 10px 20px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  display: flex;
  border-bottom: 0.3px solid #979ea1;
  h3 {
    font-weight: 300;
    margin-left: 15px;
    margin-right: 15px;
    padding-bottom: 5px;
  }
`;

export const Posts = styled.div`
  display: flex;
`;

export const PostGrid = styled.ol`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: inline-block;
  justify-content: center;
  flex-wrap: wrap;
  li {
    padding: 10px 15px;
    text-align: left;
  }
`;

export const Post = styled.div`
  display: inline-block;
  flex-direction: row;
  margin-left: 20px;
  padding-bottom: 5px;
  width: 100%;
  text-decoration: none;

  &:first-child {
    margin: 0;
  }
`;

export const PostCategory = styled.div`
  font-size: 14px;
  font-weight: 200;
  margin-top: 15px;
  text-transform: uppercase;
  color: #7e7e7e;
`;

export const PostTitle = styled.div`
  padding-bottom: 5px;

  h2 {
    font-size: 30px;
    font-weight: 300;
    color: #292929;
  }

  &:hover h2 {
    opacity: 0.4;
  }
`;

export const PostAuthors = styled.div`
  font-size: 14px;
  color: #2b2b2b;
`;

export const PostDetails = styled.div`
  display: flex;
  margin: 0;
`;

export const PostComments = styled.div`
  margin-right: 10px;
  font-size: 14px;
  color: #999;
`;

export const PostDate = styled.div`
  margin-right: 10px;
  font-size: 14px;
  color: #999;
`;

export const PostVote = styled.div`
  margin-right: 10px;
  font-size: 14px;
  color: #999;
`;

export const ButtonGroup = styled.div`
  text-align: right;
`;

export const OrderByVoteScore = styled.button`
  /* Adapt the colors based on primary prop */
  background: #1c262f;
  color: #fff;

  font-size: 1em;
  margin: 0.1em;
  padding: 5px 10px;
  border: 2px solid #1c262f;
  border-radius: 3px;
`;
