import React, { Component } from 'react'
import { Link } from "react-router-dom";
import appLogo from '../../assets/images/logo.svg';
import appMobileLogo from '../../assets/images/logo-mobile.svg';
import crossIcon from '../../assets/images/icons/cross.png';
import userImage from '../../assets/images/user.jpg';
class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: window.innerWidth,
      isMobileMenuVisible: false
    }
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({
      width: window.innerWidth
    });
  }

  toggleMenu() {
    this.setState({
      isMobileMenuVisible: !this.state.isMobileMenuVisible
    });

    this.setState({
      isMobileMenuVisible: !this.state.isMobileMenuVisible
    }, () => {
      if (this.state.isMobileMenuVisible) {
        document.body.style.overflow = "hidden"
      }
      else {
        document.body.style.overflow = "auto"
      }
    });
  }

  render() {
    return (
      <header>
        <div className="d-flex flex-row align-items-center h-100">
          <div className="left-col">
            <div className="logo-wrapper">
              <Link className="nav-links underline-none" to="/">
                <img src={appLogo} className="logo-img visible-lg" alt="logo" />
                <img src={appMobileLogo} className="logo-img visible-xs" alt="logo" />
              </Link>
            </div>
          </div>
          <div className="right-col text-right">
            {
              this.state.width <= 767 ? <button className="menu-btn" onClick={this.toggleMenu}></button> : null
            }
            <div className={`header-nav ${this.state.isMobileMenuVisible ? 'slide-in' : ''}`}>
              <span className="visible-xs menu-close" onClick={this.toggleMenu}><img src={crossIcon} alt="logo" /></span>
              <div className="d-flex flex-row justify-content-end align-items-center">
                <Link className="nav-links underline-none" to="/">Dashboard</Link>
                <Link className="nav-links underline-none" to="/">Positions</Link>
                <Link className="nav-links underline-none" to="/">Get Options</Link>
                <Link className="nav-links underline-none" to="/">Analyzer</Link>
                <Link className="nav-links underline-none" to="/">Orders</Link>
                <div className="more-link">...</div>
                <div className="user-profile">
                  <img src={userImage} alt="user-img" />
                </div>
              </div>
            </div>
          </div>
          {/* {this.state.loginModalVisibility ? this.renderLoginModal() : ''} */}
        </div>
      </header>
    )
  }
}

export default Header
