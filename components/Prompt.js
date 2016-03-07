var React = require('react');
var PropTypes = React.PropTypes;

//component stateless function
// todo: how to change to a pure function; how to do the propTypes
var Prompt = function(props) {
  return (
    <div className="jumbotron col-sm-6 col-sm-offset-3 text-center">
      <h1>{props.header}</h1>
      <div className="col-sm-12">
        <p>What is JQuery?</p>
      </div>
      <div className="col-sm-12">
        <form onSubmit={props.onSubmitUser}>
          <div className="form-group">
            <input type='text'
              className = "form-control"
              placeholder="Github username"
              onChange={props.onUpdateUser}
              value={props.username}
            />
          </div>
          <div className="form-group col-sm-4 col-sm-offset-4">
            <button className="btn btn-group btn-success" type='submit'>Continue</button>
          </div>
        </form>
      </div>
    </div>
  );
};
// var Prompt = React.createClass({
//   propTypes: ,
//   render: function() {
//
//   }
// });

Prompt.propTypes = {
  onSubmitUser: PropTypes.func.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
};

module.exports = Prompt;
