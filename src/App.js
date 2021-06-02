import './App.css';
import { Component } from 'react';
import { Button } from 'semantic-ui-react'
import ScoutContent from "./components/ScoutContent"
import SurveyContent from "./components/SurveyContent"
import ProductSurvey from "./components/ProductSurvey"
import OptimizeContent from './components/OptimizeContent'
import WelcomeContent from "./components/WelcomeContent"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'welcome'
    }
  }

  getContent() {
    var _article = null;

    if(this.state.mode === 'welcome') {
      _article = <WelcomeContent></WelcomeContent>
    } else if(this.state.mode === 'scout') {
      _article = <ScoutContent></ScoutContent>
    } else if(this.state.mode === 'survey') {
      _article = <SurveyContent></SurveyContent>
    } else if(this.state.mode === 'product') {
      _article = <ProductSurvey></ProductSurvey>
    } else if(this.state.mode === 'optimize') {
      _article = <OptimizeContent></OptimizeContent>
    }

    return _article;
  }

  render() {
    return (
      <div className="App">
        <header>
          <div className="Logo" onClick={function(e){
            e.preventDefault();
            this.setState({mode:'welcome'});
          }.bind(this)}>로고</div>
          <div className="Header-menu">
            <div className="Login">로그인</div>
            <div className="Join">회원가입</div>
          </div>
        </header>
        <section>
          <article className="Menu-bar">
            <p>
              <Button size='massive' onClick={function(e){
                e.preventDefault();
                this.setState({mode:'scout'});
              }.bind(this)}>키워드 찾기
              </Button>
            </p>
            <p><Button size='massive' onClick={function(e){
                e.preventDefault();
                this.setState({mode:'survey'});
              }.bind(this)}>키워드 분석</Button></p>
            <p><Button size='massive' onClick={function(e){
                e.preventDefault();
                this.setState({mode:'product'});
              }.bind(this)}>상품 분석</Button></p>
            <p><Button size='massive' onClick={function(e){
                e.preventDefault();
                this.setState({mode:'optimize'});
              }.bind(this)}>키워드 최적화</Button></p>
          </article>
          <article className="Main-contents">
            {this.getContent()}
          </article>
        </section>
      </div>
    );
  }
}

export default App;
