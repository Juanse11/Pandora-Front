import React from "react";
import styled from "styled-components";
import { Comment } from "semantic-ui-react";

const Author = styled(Comment.Author)`
  &&& {
    font-size: 14px;
    font-weight: 800;
    color: #4f4b65;
  }
`;

const CreatedAt = styled(Comment.Metadata)`
  &&&&& {
    font-size: 14px;
    font-weight: 400;
    color: #4f4b65;
  }
`;

const CommentText = styled(Comment.Text)`
  &&&&& {
    font-size: 16px;
    font-weight: 400;
    color: #4f4b65;
  }
`;

const Avatar = styled(Comment.Avatar)`
  &&&&& {
      width: 48px;
  }
`

const StyledComment = styled(Comment)`
  &&&&& {
    margin-bottom: 32px;
  }

`

const ReviewMessage = () => (
  <StyledComment>
    <Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
    <Comment.Content>
      <Author as="a">Matt</Author>
      <CreatedAt>
        <div>Today at 5:42PM</div>
      </CreatedAt>
      <CommentText>
        新宿歌舞伎町にある100億円の巨大ロボットと女性ダンサーが躍るレストランです。空前絶後のエンターテイメントショーを見ながら、飲食をお楽しみ下さい！
        Robot restaurant is for one-time experience in Japan. Not sure if you
        will like or hate but it will be A memory of Japan.
      </CommentText>
    </Comment.Content>
  </StyledComment>
);

export default ReviewMessage;
