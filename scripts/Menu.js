var Menu = React.createClass({
    render: function() {
        var hearts = new Array()
        for(var index = 0; index < 3; index++) {
            hearts.push(
                <span key={index}>
                    &#10084;
                </span>
            )
        }
        return (
            <div id="menu">
                {hearts}
            </div>
        )
    }
})

module.exports = Menu
