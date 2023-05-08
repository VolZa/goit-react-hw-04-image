import { Formik } from 'formik';
import {AiOutlineSearch} from 'react-icons/ai'
import {Button,  Form, SearchIcon, Field} from './SearchBar.styled'

export const SearchBar = ({onSubmit}) => {
   const handleSubmit = async(values, action) => {
      await onSubmit(values);
      action.setSubmitting(false);
      action.resetForm();
   };
 
   return (
      <Formik initialValues={{photoSearch: '', }}
         onSubmit={handleSubmit}>
         {({isSubmitting}) => (
            <Form>
               <Button type="submit" 
                  disabled={isSubmitting}
                  aria-label="Search images" 
               > 
                  <SearchIcon><AiOutlineSearch /></SearchIcon>
               </Button>
               <Field
                  name="photoSearch"
                  type="text"
                  autoComplete="off"
                  autoFocus
                  placeholder="Search images and photos"
               />
            </Form>
         )} 
      </Formik>
   )          
}




// handleSubmitForm = e => {
//    e.preventDefault();
//    if (this.state.keyWord.trim() !== ''){
//      //keyWordSearch - назва пропса в Searchbar.jsx для цього компонента
//      this.props.keyWordSearch(this.state.keyWord);
//      this.setState({ keyWord: '' });
//    } else {
//      return toast.error('Введіть запит для пошуку.');
//    }
//  }

// handleInputChange = (e) => {
//    this.setState({
//       keyWord : e.target.value.toLowerCase()
//    })
// }

// render()  {
//    const { children } = this.props;



// }