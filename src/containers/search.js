import React from 'react';

class Search extends React.Component{
    constructor(props){
        super(props);
        this.state={
            followingList:[],
            followersList:[],
            input:'',
        }
    }
    handleInput=(e)=>{
        const {input}= this.state;

        //text input changing 
        //while the user is typing, if those keys match anyone other username in the list then display name on screen 

    }
    render(){
        return(
            <>
            <input type='text' onChange={this.handleInput} /> <button>Search</button>
            </>
        )
    }
}
export default Search;
