var DialogueClass = React.createClass({
    getInitialState: function() {
        return {
            bufferedText: new String(),
            renderedText: new String()
        }
    },
    componentDidMount: function() {
        setTimeout(function() {
            this.setState({
                bufferedText: "Hello World!"
            })
        }.bind(this), 1000)
        
        setInterval(function() {
            if(this.state.bufferedText.length) {
                this.setState({
                    renderedText: this.state.renderedText + this.state.bufferedText.charAt(0),
                    bufferedText: this.state.bufferedText.substr(1)
                })
            }
        }.bind(this), 100)
    },
    render: function() {
        var style = this.getRenderedStyle()
        var text = this.getRenderedText()
        return (
            <div id="text-box" style={style}>
                {text}
            </div>
        )
    },
    getRenderedStyle: function() {
        var style = {}
        if(this.state.renderedText == "") {
            style.opacity = 0
        }
        return style
    },
    getRenderedText: function() {
        return this.state.renderedText
    }
})

module.exports = DialogueClass
