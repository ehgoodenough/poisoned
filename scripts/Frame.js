var Scene = require("./Scene")
var Actor = require("./Actor")
var Menu = require("./Menu")

var Frame = React.createClass({
    render: function() {
        return (
            <div id="frame">
                <Scene>
                    <Actor x={14.25} y={8.5} width={1.25} height={2}/>
                </Scene>
                <Menu/>
            </div>
        )
    }
})

module.exports = Frame
