import { useEffect, useState } from 'react';
import axios from 'axios';

type Book = {
  name: string
  genre: string
  author: string
}
const Books = () => {
  const [books, setBooks] = useState<Book[]>([])
  const [res, setRes] = useState("")

  useEffect(() => {
    if (books.length === 0)
      (async () => {
        const resp = await axios.get("http://192.168.1.2:8080/books")
        setBooks(resp.data)
        console.log('fetched')
      })()
  }, [])


  return (
    <div>here are all the books
      {
        books.map((book, index) => (
          <div key={index}>
            {book.name + " " + book.genre + " " + book.author}
          </div>
        ))
      }
    </div>
  )
}

export default Books