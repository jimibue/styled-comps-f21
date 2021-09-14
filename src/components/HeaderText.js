import styled from "styled-components";

// this how to do useing if else if esle
// const fontSizeIf = (size) => {
//    if(size == 'large'){
//      return "4rems";
//    } else if(size == 'med'){
//     return "3rem";
//    } else {
//     return "2ems";
//    }
// };

// same as above just using switch statement
const fontSize = (size) => {
  switch (size) {
    case "large":
      return "4rem";
    case "med":
      return "3rem";
    default:
      return "2rem";
  }
};

const HeaderText = styled.h1`
  color: white !important;
  text-align: center;
  font-size: ${(props) => fontSize(props.size)} !important;
`;

// font-size: ${({size}) => fontSize(size)} !important;
export default HeaderText;
