import React,{ useState } from 'react';



const SearchBar=({onSubmit})=>{

    const [term, setTerm]= useState('');

    const onFormSubmit =(event)=>{
        event.preventDefault();  

        onSubmit(term);


  }


  return(

    <div className="ui segment">
            <form  className="ui form" onSubmit={onFormSubmit}>
                <div className="ui field">
                    <label>Video Search</label>
                    <input type="text"  value={term} onChange={(event)=>{setTerm(event.target.value)}}/>


                </div>


            </form>

    </div>
)  


}


export default SearchBar;