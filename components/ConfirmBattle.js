var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');

function puke(object) {
    return <pre>{JSON.stringify(object, null, "")}</pre>
}

var ConfirmBattle = React.createClass({
  propTypes: {
    isLoading: PropTypes.bool.isRequired,
    onInitiateBattle: PropTypes.func.isRequired,
    playersInfo: PropTypes.array.isRequired
  },
  render: function() {
    return (
      this.props.isLoading === true
      ? <div className="col-sm-12 text-center"><p className="lead">Loading</p></div>
      :
      <div className="jumbotron col-sm-12 text-center">
        <div>
          <h1>Cofirm Players</h1>
          <div className="col-sm-8 col-sm-offset-2">
            <div className="col-sm-6">
              <p className="lead">Player One</p>
              <li className="list-group-item"><img src={this.props.playersInfo[0].avatar_url} width='200' height='200'/></li>
              <li className="list-group-item">Name: {this.props.playersInfo[0].name}</li>
              <li className="list-group-item">UserName: {this.props.playersInfo[0].login}</li>
              <li className="list-group-item">Location: {this.props.playersInfo[0].location}</li>
              <li className="list-group-item">Company: {this.props.playersInfo[0].company}</li>
              <li className="list-group-item">Followers: {this.props.playersInfo[0].followers}</li>
              <li className="list-group-item">Following: {this.props.playersInfo[0].following}</li>
              <li className="list-group-item">Public Repo: {this.props.playersInfo[0].public_repos}</li>
            </div>
            <div className="col-sm-6">
              <p className="lead">Player Two</p>
              <li className="list-group-item"><img src={this.props.playersInfo[1].avatar_url} width='200' height='200'/></li>
              <li className="list-group-item">Name: {this.props.playersInfo[1].name}</li>
              <li className="list-group-item">UserName: {this.props.playersInfo[1].login}</li>
              <li className="list-group-item">Location: {this.props.playersInfo[1].location}</li>
              <li className="list-group-item">Company: {this.props.playersInfo[1].company}</li>
              <li className="list-group-item">Followers: {this.props.playersInfo[1].followers}</li>
              <li className="list-group-item">Following: {this.props.playersInfo[1].following}</li>
              <li className="list-group-item">Public Repo: {this.props.playersInfo[1].public_repos}</li>
            </div>
          </div>
        </div>
        <div className="col-sm-8 col-sm-offset-2">
          <div className="col-sm-12" style={styles.space}><button type="button" className="btn btn-group btn-lg btn-success" onClick={this.props.onInitiateBattle}>Initiate Battle</button></div>
          <div className="col-sm-12" style={styles.space}><button type="button" className="btn btn-group btn-lg btn-danger">Cancel</button></div>
        </div>
      </div>

    );
  }

});

module.exports = ConfirmBattle;
