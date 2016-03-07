var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelper = require('../utils/githubHelper');

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      isLoading: true,
      playersInfo: []
    }
  },
  componentDidMount: function() {
    // Fetch user info from githut and set state
    var query = this.props.location.query;
    githubHelper.getUsersInfo([query.playerOne, query.playerTwo])
      .then(function(info) {
          this.setState({
            isLoading: false,
            playersInfo: info
        });
      }.bind(this));
  },
  handleInitiateBattle: function() {
    this.context.router.push("/results");
  },
  render:function() {
    return <ConfirmBattle
      isLoading={this.state.isLoading}
      onInitiateBattle={this.handleInitiateBattle}
      playersInfo={this.state.playersInfo}
      />
  }
});

module.exports = ConfirmBattleContainer;
