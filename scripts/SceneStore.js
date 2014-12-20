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
    getInitialState: function() {
        return {
            index: this.index
        }
    },
    index: "1",
    scenes: [
        <Scene>
            <Actor x={14.25} y={8.5} width={1.25} height={2}/>
        </Scene>,
        <Scene>
            <Actor x={1} y={1} width={5} height={3}/>
        </Scene>
    ]
})

    /*mixins: [
        Reflux.connect(SceneStore)
    ],*/
    render: function() {
        /*var scene = SceneData[this.state.index]
        var actors = scene.getActors()
        
        var rendered_actors = new Array()
        for(var index in actors) {
            rendered_actors.push(
                actors[index].render(index)
            )
        }*/
    }