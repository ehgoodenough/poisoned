var Scene = require("./Scene")
var Menu = require("./Menu")
var Dialogue = require("./Dialogue")

var Frame = React.createClass({
    render: function() {
        return (
            <div id="frame">
                <Scene/>
                <Dialogue/>
                <Menu/>
            </div>
        )
    }
})

module.exports = Frame
