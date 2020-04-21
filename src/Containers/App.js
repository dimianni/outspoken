import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Quotes from './Quotes';
import Quote from '../Components/Quote';
import Abc from './Abc/Abc';
import QuoteResults from '../Components/QuoteResults/QuoteResults';
import TagResults from '../Components/TagResults/TagResults'
import Footer from '../Components/Footer/Footer';


class App extends Component {

  render() {

    return (
      <HashRouter>
        <div className="appCont">
          <Header />

          
            <div className="container">

              <Switch>

                <Route path="/" exact component={Quotes} />
                <Route path="/abc" exact component={Abc} />
                <Route path="/tag/:id" exact component={QuoteResults} />
                <Route path="/tagname/:id" exact component={TagResults} />
                <Route path="/quote/:id" exact component={Quote} />

              </Switch>

            </div>
       


          <Footer />
        </div>

      </HashRouter>
    );
  }

}

export default App;
