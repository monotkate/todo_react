import React from 'react';

// var EnterTask = React.createClase({
//     render: function() {
//
//     }
// });
//
// var Task = React.createClass({
//     render: function() {
//
//         var tasks = ["I need to get done this", "and maybe this", "oh and that other thing"];
//         var taskList = [];
//         var lastTask = null;
//
//         var taskList = tasks.map(function(task){
//                         return <li><input type="checkbox"/>{task}</li>;
//                       });
//         return (
//             <ul>
//                 {taskList}
//             </ul>
//         );
//     }
// });

class App extends React.Component {
    render() {
        return (
            <div> "Hello Word" </div>
        );
    }
}

// class App extends React.Component {
//     navMenuClick() {
//         console.log('Nav menu button clicked!');
//     }
//
//     render() {
//         return (
//             <AppBar
//                 title="React Starter"
//                 iconClassNameRight="muidocs-icon-navigation-expand-more"
//                 onLeftIconButtonTouchTap={this.navMenuClick} />
//         );
//     }
// }

export default App;
