
var React = require("react");
var ReactDOM = require("react-dom");

var routes = require('../config/routes');
var USER_DATA = {
  name : "David Liu",
  username: "davidlzs",
  imageUrl: "https://avatars3.githubusercontent.com/u/183225?v=3&s=460"
}

var ProfileImg = React.createClass({
  render: function() {
    return <img src={this.props.imageUrl} height="100" withd="100"></img>
  }
});


var Link = React.createClass({
    changeURL: function() {
      window.location.replace(this.props.href);
    },
    render: function(){
      return(
        <span style={{color:'blue', cursor: 'pointer'}} onClick={this.changeURL}>
          {this.props.children}
        </span>
      );
    }
});
var ProfileLink = React.createClass ({
  render: function() {
    return(
    <div>
      <Link href = {"https://github.com/" + this.props.username}>
        {this.props.username}
      </Link>
    </div>
    );
  }
});

var ProfileName = React.createClass({
  render: function() {
    return <div>{this.props.name}</div>
  }
});

var Avartar = React.createClass({
  render: function(){
    return(
      <div>
          <ProfileImg imageUrl = {this.props.user.imageUrl} />
          <ProfileLink username = {this.props.user.username} />
          <ProfileName name = {this.props.user.name} />
      </div>
    );
  }
});

ReactDOM.render(
  routes,
  document.getElementById('app')
);
