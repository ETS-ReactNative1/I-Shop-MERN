import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"

const SearchBox = ({ history }) => {
  const [keyword, setKeyWord] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push("/")
    }
  }
  return (
    <Form onSubmit={submitHandler} className='d-flex' inline>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyWord(e.target.value)}
        placeholder='Search Products'
        className='me-2'
      ></Form.Control>

      <Button type='submit' variant='success' className='search-btn'>
        Search
      </Button>
    </Form>
  )
}

export default SearchBox
