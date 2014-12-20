var SceneData = {
    "1.0": {
        "mephistopheles": {
            style: {
                top: 8.5 + "rem",
                left: 14.25 + "rem",
                width: 1.25 + "rem",
                height: 2 + "rem",
                position: "absolute",
                backgroundColor: "black"
            },
            onClick: function() {
                //SceneActions.ChangeIndex("1.1")
            }
        }
    }
}

var SceneActions = Reflux.createActions([
    "ChangeIndex"
])

var SceneStore = Reflux.createStore({
    listenables: [
        SceneActions
    ],
    onChangeIndex: function(index) {
        this.state.index = index
        this.trigger(this.state)
    },
    state: {
        index: "1.0"
    },
    getInitialState: function() {
        return this.state
    }
})

var Scene = React.createClass({
    mixins: [
        Reflux.connect(SceneStore)
    ],
    render: function() {
        var scene = SceneData[this.state.index]
        console.log(scene)
        
        
        var actors = new Array()
        for(var actor in scene) {
            actors.push(
                <div key={actor}
                     style={scene[actor].style}
                     onClick={scene[actor].onClick}>
                </div>
            )
        }
        return (
            <div className="scene">
                {actors}
            </div>
        )
    }
})

module.exports = Scene
