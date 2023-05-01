import styled from "styled-components";
import { Form as FormikForm, Field as FormikField} from 'formik';

export const Searchbar = styled.div`//SearchInputContainer
   display: flex;
   align-items: normal;
   margin: 8px 0;
   background-color: #fff;
   border: 1px solid #0cc;
   border-radius: 4px;
   height: 30px;
   width: 350px;
`;

export const Form = styled(FormikForm)`
   display: flex;
   align-items: center;
   width: 100%;
   height: 40px;
   max-width: 600px;
   background-color: #fff;
   border-radius: 3px;
   overflow: hidden;
`;

export const Field = styled(FormikField)`
   // display: inline-block;
   width: 100%;

   font: inherit;
   font-size: 20px;
   border: none;
   outline: none;
   padding: 0 4px 3px;

   
   ::placeholder {
      font: inherit;
      font-size: 18px;
    }
`;

export const Button = styled.button`
   border: none;// 2px solid tomato;
   padding: 0  6px;

`;

export const SearchIcon = styled.span`
   display: flex;
   margin: 0;

   color: #777;
   font-size: 18px;
   line-height: 1.9em;
`;


// export const Form = styled.header`
// top: 0;
// left: 0;
// position: sticky;
// z-index: 1100;
// display: flex;
// justify-content: center;
// align-items: center;
// min-height: 64px;
// padding-right: 24px;
// padding-left: 24px;
// padding-top: 12px;
// padding-bottom: 12px;
// color: #fff;
// background-color: ${p => p.theme.colors.lightBlue};
// box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
//   0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
// `
// // width: 100%;
// // // height: 50px;
// // display: flex;
// // justify-content: center;
// // // align-items: center;
// // background-color: #34f;

// export const Field = styled.form`//SearchInputContainer
//    display: flex;
//    align-items: normal;
//    margin: 8px 0;
//    background-color: #fff;
//    border: 1px solid #0cc;
//    border-radius: 4px;
//    height: 30px;
//    width: 350px;
// `;

// export const Button = styled.button`
//    border: none;
// `



// export const Field = styled.input`
//    flex: 1;
//    border: none;
//    outline: none;
//    font-size: 16px;
//    color: #333;
//    &::placeholder {
//       color: #999;
//    }
// `;