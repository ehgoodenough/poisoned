var first_scene = {
    "mephistopheles": {
        style: {
            width: 50,
            height: 75,
            top: 295,
            left: 505,
            position: "absolute",
            backgroundColor: "black"
        },
        onClick: function() {
            console.log("i am clicked");
        }
    }
}

var Scene = React.createClass({
    getInitialState: function() {
        return {
            "hello": "world"
        }
    },
    render: function() {
        var scene = first_scene
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
