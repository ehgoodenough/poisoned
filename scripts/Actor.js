var Actor = React.createClass({
    render: function() {
        return (
            <div style={this.renderStyle()}>
            </div>
        )
    },
    renderStyle: function() {
        return {
            position: "absolute",
            left: this.props.x + "rem",
            top: this.props.y + "rem",
            width: this.props.width + "rem",
            height: this.props.height + "rem",
            backgroundColor: "black"
        }
    }
})

module.exports = Actor
