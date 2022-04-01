import * as React from "react"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 900,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}


const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}
// data

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Code Conor</title>
      <h1 style={headingStyles}>
        Welcome to Code Conor
        <br />
        <span style={descriptionStyle}>a record of my programming journey. </span>
      </h1>
      <span style={codeStyles}>I'm currently a student at Launch School.
        </span>
    </main>
  )
}

export default IndexPage
