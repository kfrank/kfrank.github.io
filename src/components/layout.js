import React from "react"
import Nav from "./Nav"

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div>
        <Nav />
        <main>{children}</main>
        <footer>© {new Date().getFullYear()}</footer>
      </div>
    )
  }
}

export default Layout
