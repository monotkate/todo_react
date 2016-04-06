
var EnterTask = React.createClase({
    render: function() {

    }
});

var Task = React.createClass({
    render: function() {

        var tasks = ["I need to get done this", "and maybe this", "oh and that other thing"];
        var taskList = [];
        var lastTask = null;

        var taskList = tasks.map(function(task){
                        return <li><input type="checkbox"/>{task}</li>;
                      });
        return (
            <ul>
                {taskList}
            </ul>
        );
    }
});

var Main = React.createClass({
    render: function() {
            return (
                <div>
                    "Hello World"
                    <Task />
                </div>
            );
        }
});

ReactDOM.render(<Main />, document.body);
