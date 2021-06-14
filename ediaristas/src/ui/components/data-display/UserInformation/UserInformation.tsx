import React from "react";
import {
  UserInformationContainer,
  UserName,
  UserDescription,
  AvatarStyled,
  RatingStyled,
} from "./UserInformation.style";

const UserInformation = (props) => {
  return (
    <UserInformationContainer>
      <AvatarStyled src={"http:https://github.com/GuMunhoz.png"}>
        <UserName>Akira</UserName>
        <RatingStyled />
        <UserDescription />
      </AvatarStyled>
    </UserInformationContainer>
  );
};

export default UserInformation;
