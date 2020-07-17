import React from "react"
import styles from "./layout.module.scss"
// import Nav from "./Nav"

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div className={styles.wrapper}>
        {/* <Nav /> */}
        <main>{children}</main>
        {/* <footer>© {new Date().getFullYear()}</footer> */}
      </div>
    )
  }
}

export default Layout
