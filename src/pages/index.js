import * as React from 'react'
import { Link } from 'gatsby'

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Code Conor</title>
      <h1>a programmers journey</h1>
      <p>I'm currently a student at <a href='https://launchschool.com' target="_blank" rel="noopener noreferrer">Launch School.</a></p>
      <Link to='/about'>About</Link>
    </main>
  )
}

export default IndexPage
