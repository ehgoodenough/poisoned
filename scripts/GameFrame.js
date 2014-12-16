var Scene = React.createClass({
    render: function() {
        return (
            <div className="scene">
                
            </div>
        )
    }
})

var GameFrame = React.createClass({
    render: function() {
        return (
            <div id="game-frame">
                <Scene/>
            </div>
        )
    }
})

module.exports = GameFrame
