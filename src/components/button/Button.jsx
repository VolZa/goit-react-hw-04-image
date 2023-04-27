import { LoadMoreBtn } from './Button.styled';
export const Button = ({ clickLoad }) => {
   return (
     <LoadMoreBtn onClick={clickLoad}  type="button">
       Load more
     </LoadMoreBtn>
   );
 };