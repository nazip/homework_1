const DOM = React.DOM;

class TextBox extends React.Component {
  render() {
    const text = this.props.children;
    return <span>{text}</span>;
  }
}

ReactDOM.render(
  React.createElement(TextBox, null, "Hello World!"),
  document.getElementById("app")
);