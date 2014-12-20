var Scene = require("./Scene")
var Menu = require("./Menu")

var Frame = React.createClass({
    render: function() {
        return (
            <div id="frame">
                <Scene/>
                <Menu/>
            </div>
        )
    }
})

module.exports = Frame
