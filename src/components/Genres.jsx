import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import apiClient from '../services/apiClient'
import { List, ListItem } from '@chakra-ui/react'

const Genres = () => {
    const [genres, setGenres]=useState([])
    const [error, setError]=useState([])
    useEffect(()=>{
      axios
      .get(apiClient('/genres'))
      .then(res=>setGenres(res.data.results))
      .catch(err=>setError(err.message))
    },[])
  return (
    <List>
        {genres.map(genre=><ListItem key={genre.id}>
            {genre.name}
        </ListItem>)}
      
    </List>
  )
}

export default Genres
