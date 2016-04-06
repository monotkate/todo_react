
var EnterTask = React.createClase({
    render: function () {}
});

var Task = React.createClass({
    displayName: "Task",

    render: function () {

        var tasks = ["I need to get done this", "and maybe this", "oh and that other thing"];
        var taskList = [];
        var lastTask = null;

        var taskList = tasks.map(function (task) {
            return React.createElement(
                "li",
                null,
                React.createElement("input", { type: "checkbox" }),
                task
            );
        });
        return React.createElement(
            "ul",
            null,
            taskList
        );
    }
});

var Main = React.createClass({
    displayName: "Main",

    render: function () {
        return React.createElement(
            "div",
            null,
            "\"Hello World\"",
            React.createElement(Task, null)
        );
    }
});

ReactDOM.render(React.createElement(Main, null), document.body);