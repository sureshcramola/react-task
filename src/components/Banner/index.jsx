import React, { Component } from 'react'
import { Route } from "react-router-dom";
import Manifesto from '../../components/Manifesto';
import Bookmark from '../../components/Bookmark';
import Trading from '../../components/Trading';
import TradeSelection from '../../components/TradeSelection';
import Trending from '../../components/Trending';
import StopLoss from '../../components/StopLoss';
import BetSizing from '../../components/BetSizing';

class Banner extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <section className="banner-wrapper">
        <div className="top-img">
          {/* <img src={bannerImg} className="img-100" /> */}
        </div>
        <div className="d-flex flex-row">
          <Route exact path="/" component={Manifesto} />
          <Route exact path="/bookmark" component={Bookmark} />
          <Route exact path="/trading" component={Trading} />
          <Route exact path="/trade-selection" component={TradeSelection} />
          <Route exact path="/trending" component={Trending} />
          <Route exact path="/stop-loss" component={StopLoss} />
          <Route exact path="/bet-sizing" component={BetSizing} />
        </div>
      </section>
    )
  }
}
export default Banner
