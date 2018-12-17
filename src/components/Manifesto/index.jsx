import React, { Component } from 'react'
import { Link } from "react-router-dom";
import AnimateHeight from 'react-animate-height';
import bookmarkIcon from '../../assets/images/icons/bookmarks.svg';
import bookmarkMobileIcon from '../../assets/images/icons/bookmarks-mobile.svg';
import tradingIcon from '../../assets/images/icons/trading.svg';
import tradingMobileIcon from '../../assets/images/icons/trading-mobile.svg';
import tradeSelectionIcon from '../../assets/images/icons/trade-selection.svg';
import tradeSelectionMobileIcon from '../../assets/images/icons/trade-selection-mobile.svg';
import trendingIcon from '../../assets/images/icons/trending.svg';
import trendingMobileIcon from '../../assets/images/icons/trending-mobile.svg';
import lossIcon from '../../assets/images/icons/stop-loss.svg';
import lossMobileIcon from '../../assets/images/icons/stop-loss-mobile.svg';
import betSizingIcon from '../../assets/images/icons/bet-sizing.svg';
import betSizingMobileIcon from '../../assets/images/icons/bet-sizing-mobile.svg';
class Manifesto extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: window.innerWidth,
      toggleInfo: false,
      height: 80,
    }
    this.expandInfo = this.expandInfo.bind(this);
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

  expandInfo = () => {
    const { height } = this.state;
    this.setState({
      toggleInfo: !this.state.toggleInfo,
      height: height === 80 ? 'auto' : 80,
    });
    // this.refs.infoText.slideToggle()
  }

  render() {
    return (
      <div className="manifesto-section">
        <section className="top-section">
          <div className="manifesto-info">
            <h1>{this.state.width <= 767 ? 'The Sensibull Manifesto' : 'Manifesto'}</h1>
            {
              this.state.width <= 767 ?
                <AnimateHeight
                  duration={500}
                  height={this.state.height}
                >
                  <p>In the quest to be profitable, a trader often looks outwards, for better research and better trades and more answers. Whereas the most important thing to do is to look inwards. Sensibulll Manifesto is a step towards that inward journey. It is a series of principles which we, as a set of disciplined traders embrace for better trading. We focus on discipline, right thinking, the right attitude towards money. If you have not read it yet, you should start by reading: How to be a better trader Inner Worth - Mind over Markets </p>
                  <div className={`${this.state.toggleInfo ? '' : 'text-gradient'}`}></div>
                </AnimateHeight> :
                <p>In the quest to be profitable, a trader often looks outwards, for better research and better trades and more answers. Whereas the most important thing to do is to look inwards. Sensibulll Manifesto is a step towards that inward journey. It is a series of principles which we, as a set of disciplined traders embrace for better trading. We focus on discipline, right thinking, the right attitude towards money. If you have not read it yet, you should start by reading: How to be a better trader Inner Worth - Mind over Markets</p>
            }

            {this.state.width <= 767 ? <button className="read-more-btn" onClick={this.expandInfo}>{this.state.toggleInfo ? 'Hide' : 'Read More'}</button> : null}
          </div>
          <div className="d-flex flex-row flex-wrap category-row">
            <div className="column-4">
              <div className="category">
                <Link to="/bookmark">
                  <span className="icon-img">
                    <img src={this.state.width <= 767 ? bookmarkMobileIcon : bookmarkIcon} alt="bookmark" />
                  </span>
                  <span>Bookmarks</span>
                </Link>
              </div>
            </div>
            <div className="column-4">
              <div className="category">
                <Link to="/trading">
                  <span className="icon-img">
                    <img src={this.state.width <= 767 ? tradingMobileIcon : tradingIcon} alt="trading" />
                  </span>
                  <span>Trading</span>
                </Link>
              </div>
            </div>
            <div className="column-4">
              <div className="category">
                <Link to="/trade-selection">
                  <span className="icon-img">
                    <img src={this.state.width <= 767 ? tradeSelectionMobileIcon : tradeSelectionIcon} alt="trade selection" />
                  </span>
                  <span>Trade Selection</span>
                </Link>
              </div>
            </div>
            <div className="column-4">
              <div className="category">
                <Link to="/trending">
                  <span className="icon-img">
                    <img src={this.state.width <= 767 ? trendingMobileIcon : trendingIcon} alt="trending" />
                  </span>
                  <span> {this.state.width <= 767 ? 'Trend Is Friend' : 'Trending'}</span>
                </Link>
              </div>
            </div>
            <div className="column-4">
              <div className="category">
                <Link to="/stop-loss">
                  <span className="icon-img">
                    <img src={this.state.width <= 767 ? lossMobileIcon : lossIcon} alt="stop loss" />
                  </span>
                  <span> {this.state.width <= 767 ? 'Stop Losses' : 'Stop loss'}</span>
                </Link>
              </div>
            </div>
            <div className="column-4">
              <div className="category">
                <Link to="/bet-sizing">
                  <span className="icon-img">
                    <img src={this.state.width <= 767 ? betSizingMobileIcon : betSizingIcon} alt="bet sizing" />
                  </span>
                  <span>Bet Sizing</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
export default Manifesto
