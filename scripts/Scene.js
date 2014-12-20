var Scene = function(actors) {
    this.actors = actors || {}
}

Scene.prototype.getActors = function() {
    return this.actors
}

var Actor = function(data) {
    this.position = data.position || {
        x: 0,
        y: 0
    }
    this.size = data.size || {
        width: 1,
        height: 1
    }
    this.events = data.events || {
        onClick: function() {}
    }
}

Actor.prototype.renderStyle = function() {
    return {
        position: "absolute",
        left: this.position.x + "rem",
        top: this.position.y + "rem",
        width: this.size.width + "rem",
        height: this.size.height + "rem",
        backgroundColor: "black"
    }
}

Actor.prototype.render = function(name) {
    return (
        <div key={name}
             style={this.renderStyle()}
             onClick={this.events.onClick}>
        </div>
    )
}

var SceneData = {
    "1.0": new Scene({
        "mephistopheles": new Actor({
            position: {
                y: 8.5,
                x: 14.25
            },
            size: {
                width: 1.25,
                height: 2
            },
            events: {
                onClick: function() {
                    SceneActions.ChangeIndex("1.1")
                }
            }
        })
    })
}

var SceneReActions = Reflux.createActions([
    "ChangeIndex"
])

var SceneReStore = Reflux.createStore({
    listenables: [
        SceneReActions
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

var SceneReClass = React.createClass({
    mixins: [
        Reflux.connect(SceneReStore)
    ],
    render: function() {
        var scene = SceneData[this.state.index]
        var actors = scene.getActors()
        
        var rendered_actors = new Array()
        for(var index in actors) {
            rendered_actors.push(
                actors[index].render(index)
            )
        }
        return (
            <div className="scene">
                {rendered_actors}
            </div>
        )
    }
})

module.exports = SceneReClass
