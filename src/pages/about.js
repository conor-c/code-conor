import * as React from 'react'
import { Link } from 'gatsby'

const AboutPage = () => {
  return (
    <main>
      <title>About</title>
      <h1>Conor:</h1>
      <ul>
        <li>is learning to program</li>
        <li>is learning to use Gatsby</li>
      </ul>
      <Link to="/">Back to Home</Link>
    </main>
  )
}

export default AboutPage