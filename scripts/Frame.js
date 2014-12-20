var SceneStore = require("./SceneStore")
var Menu = require("./Menu")

var Frame = React.createClass({
    mixins: [
        Reflux.connect(SceneStore, "scene")
    ],
    render: function() {
        return (
            <div id="frame">
                {this.state.scene}
                <Menu/>
            </div>
        )
    }
})

module.exports = Frame
