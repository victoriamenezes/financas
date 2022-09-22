import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 10px;
  background: ${({primary}) => (primary ? '#377D33' : 'linear-gradient(to left top, #2c7fbb, #2b84bc, #2c89be, #2f8ebe, #3493bf, #3599c0, #399ec1, #3ea4c1, #45abc0, #4fb3bf, #5bb9bd, #69c0bb)')};
  white-space: nowrap;
  // box-shadow:
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => (dark ? '#0D3B66' : '#fff')};
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  outline: none;
  border:none;
  cursor: pointer;
  display: flex;
  justufy-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;


  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#0D3B66' : '#01BF71')};

  }




`
