import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Modal from 'react-responsive-modal';
import lossIcon from '../../assets/images/icons/stop-loss.svg';
import heartIcon from '../../assets/images/icons/heart.svg';
class StopLoss extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: window.innerWidth,
      isShareModalVisible: false
    }
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

  scrollToResources = () => {
    window.scrollTo({
      top: this.resourceRef.offsetTop,
      behavior: "smooth"
    })
  }

  showModal = () => {
    this.setState({
      isShareModalVisible: true
    });
  }

  onCloseModal = () => {
    this.setState({
      isShareModalVisible: false
    });
  };

  render() {
    return (
      <div className="manifesto-section d-flex flex-column">
        <section className="top-section bg-grey">
          {
            this.state.width <= 767 ?
              <div className="mainifesto-section-details">
                <div className="d-flex flex-row">
                  <img src={heartIcon} alt="bookmark-icon" className="align-self-start" />
                  <div className="flex-1">
                    <h1>Stop Loss</h1>
                    <span className="info-text">Lorem Ipsum sit ammet</span>
                    <div>
                      <button className="mainfesto-btn" onClick={this.scrollToResources}>Resources</button>
                      <span className="share-btn" onClick={this.showModal}>Share</span>
                    </div>
                  </div>
                </div>
              </div>
              :
              <div className="mainifesto-section-details">
                <h1 className="d-flex flex-row"><img src={lossIcon} alt="stop-loss-icon" /> <span>Stop Loss</span></h1>
                <p>In the quest to be profitable, a trader often looks outwards, for better research and better trades and more answers. Whereas the most important thing to do is to look inwards. Sensibulll Manifesto is a step towards that inward journey. It is a series of principles which we, as a set of disciplined traders embrace for better trading. We focus on discipline, right thinking, the right attitude towards money. If you have not read it yet, you should start by reading: How to be a better trader Inner Worth - Mind over Markets</p>
              </div>
          }

          <ul className="normal-list">
            <li>Trading is not gambling.</li>
            <li>Trading is years of hardwork, learning, and discipline. If you are looking for a place to make money easily, look elsewhere.</li>
            <li>Trading is purely a game of psychology and discipline. Numbers data etc are secondary</li>
            <li>Never trade with a profit target in mind. Trade because a trade is the right thing to do at that point of time</li>
          </ul>
          {
            this.state.width <= 767 ?
              <div className="resources-wrapper" ref={(ref) => this.resourceRef = ref}>
                <h3>Resources</h3>
                <div className="resources-block">
                  <div className="d-flex flex-row">
                    <div className="resource-thumb"></div>
                    <div className="resource-name align-self-center"><span>Resources</span></div>
                  </div>
                  <div className="d-flex flex-row">
                    <div className="resource-thumb"></div>
                    <div className="resource-name align-self-center"><span>Resources 2</span></div>
                  </div>
                  <div className="d-flex flex-row">
                    <div className="resource-thumb"></div>
                    <div className="resource-name align-self-center"><span>Resources 3</span></div>
                  </div>
                </div>
              </div>
              :
              null
          }
        </section>
        <footer className="mt-auto">
          <div className="d-flex flex-row justify-content-between align-items-center h-100">
            <div>
              <Link to="/">{this.state.width <= 767 ? 'Back to Manifesto' : 'Back to Manifesto Home'}</Link>
            </div>
            <span className="share-btn" onClick={this.showModal}>Share</span>
          </div>
        </footer>

        {/* Share Modal */}
        <Modal open={this.state.isShareModalVisible} onClose={this.onCloseModal} center>
          <h3>Share Link</h3>
        </Modal>

      </div >

    )
  }
}
export default StopLoss
