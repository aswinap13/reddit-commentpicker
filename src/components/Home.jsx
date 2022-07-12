import React from 'react'
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { PacmanLoader } from 'react-spinners';
import Navbar from './Navbar';
import Card from 'react-bootstrap/Card';
import useFetch from './useFetch';
import CommentDisplay from './CommentDisplay';
import '../App.css';



function Home() {

  const [postUrl, setpostUrl] = useState('');
  

  // Using PostUrl fetch API and UPON fetching use below to display CommentDisplay component
  // const { data, loading, error } = useFetch(

  //   );

  //   if (loading) return <PacmanLoader/> 

  //   if (error) console.log(error);

    const fetchPosturl= event =>{
        event.preventDefault(); 
        //Using postUrl, fetch the content
        console.log(postUrl)
    }
  return (
    <div className='Home'>
        <Navbar/>

        <Card className='card'>
            <Card.Body>
                <Card.Title>Reddit Comment Checker </Card.Title>
                <Card.Text>
                    Enter the URL of the post!!!
                </Card.Text>
                <div className='card-content'>
                  <input 
                  type="text" 
                  name="url" 
                  size="50" 
                  placeholder='Please enter a Reddit URL'
                  onChange={event => setpostUrl(event.target.value)}
                  value={postUrl}
                  />
                  <Button className='btn' variant="success" type='submit' onClick={fetchPosturl}>To comments</Button>
                </div>
            </Card.Body>
        </Card>


        {/* COMMENT DISPLAY COMPONENT to be shown upon fetching Data of the URL */}
        <CommentDisplay/>


        
    </div>
  )
}

export default Home