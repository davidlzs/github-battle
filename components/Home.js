var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({

  render : function() {
    return (
      <div className="jumbotron col-sm-12 text-center">
        <h1> Github Battle</h1>
        <p className="lead">What is jQuery?</p>
        <Link to='/playerOne'>
          <button type="button" className="btn-success">Get Started</button>
        </Link>
      </div>
    );
  }
});

module.exports = Home;
