var SceneStore = require("./SceneStore")
var Menu = require("./Menu")
var SceneActions = require("./SceneActions")

var Frame = React.createClass({
    mixins: [
        Reflux.connect(SceneStore, "scene")
    ],
    render: function() {
        return (
            <div id="frame" onClick={this.onClick}>
                {this.state.scene}
                <Menu/>
            </div>
        )
    },
    onClick: function() {
        SceneActions.ChangeState(1)
    }
})

module.exports = Frame
