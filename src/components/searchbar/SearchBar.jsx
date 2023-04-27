import { Component } from 'react';
import {AiOutlineSearch} from 'react-icons/ai'
import { toast } from 'react-hot-toast';
import {Button, SearchBar, SearchForm, SearchIcon, SearchInput} from './SearchBar.styled'

export class Searchbar extends Component {
   state = {
      keyWord : '',
   }

   handleSubmitForm = e => {
      e.preventDefault();
      if (this.state.keyWord.trim() !== ''){
        //keyWordSearch - назва пропса в Searchbar.jsx для цього компонента
        this.props.keyWordSearch(this.state.keyWord);
        this.setState({ keyWord: '' });
      } else {
        return toast.error('Введіть запит для пошуку.');
      }
    }

   handleInputChange = (e) => {
      this.setState({
         keyWord : e.target.value.toLowerCase()
      })
   }

   render()  {
      return (
         <SearchBar>
            <SearchForm onSubmit={this.handleSubmitForm}>
               <Button type="submit">
                  <SearchIcon><AiOutlineSearch /></SearchIcon>
               </Button>
               <SearchInput type="text" placeholder="Пошук..." 
                  name='keyWord' 
                  value={this.state.keyWord}
                  onChange={this.handleInputChange}
               />
            </SearchForm>
         </SearchBar>
      )          
   }
}