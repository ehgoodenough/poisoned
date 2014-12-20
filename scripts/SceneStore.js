var SceneActions = require("./SceneActions")
var Scene = require("./Scene")
var Actor = require("./Actor")

var SceneStore = Reflux.createStore({
    listenables: [
        SceneActions
    ],
    storables: [
        <Scene>
            <Actor x={14.25} y={8.5} width={1.25} height={2}/>
        </Scene>,
        <Scene>
            <Actor x={1} y={1} width={5} height={3}/>
        </Scene>
    ],
    getInitialState: function() {
        return this.storables[0]
    },
    onChangeState: function(index) {
        this.trigger(this.storables[index])
    }
})

module.exports = SceneStore
