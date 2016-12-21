const DOM = React.DOM;

const settings = {
  src : "https://cdn.scratch.mit.edu/static/site/users/avatars/1000/2402.png",
  width : 100,
  height : 100,
  alt : "BMO"
}

class Image extends React.Component {
  render() {
    const settings = this.props;
    return <img alt={settings.alt} src={settings.src} width={settings.width} height={settings.height}/>;
  }
}

class TextBox extends React.Component {
  render() {
    const text = this.props.children;
    return <span>{text}</span>;
  }
}

class BlogItem extends React.Component {
  render() {
    const settings = this.props.settings;
    const text = this.props.children;
    
    const image = React.createElement(Image, settings);
    const textbox = React.createElement(TextBox, null, text);
    return <div>{image}{text}</div>;
  }
}

ReactDOM.render(
    React.createElement(BlogItem, {settings}, "hello"),
    document.getElementById("app")
);