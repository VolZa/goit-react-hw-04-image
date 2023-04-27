import styled from "styled-components";

export const SearchBar = styled.header`
   width: 100%;
   // height: 50px;
   display: flex;
   justify-content: center;
   // align-items: center;
   background-color: #34f;
`
export const SearchForm = styled.form`//SearchInputContainer
   display: flex;
   align-items: normal;
   margin: 8px 0;
   background-color: #fff;
   border: 1px solid #0cc;
   border-radius: 4px;
   height: 30px;
   width: 350px;
`;

export const Button = styled.button`
   border: none;
`

export const SearchIcon = styled.span`
   margin: 0 10px;
   color: #aaa;
   font-size: 18px;
   line-height: 1.9em;
`;

export const SearchInput = styled.input`
   flex: 1;
   border: none;
   outline: none;
   font-size: 16px;
   color: #333;
   &::placeholder {
      color: #999;
   }
`;