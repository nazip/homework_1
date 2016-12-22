const DOM = React.DOM;

const imageSettings = {
  src : "https://cdn.scratch.mit.edu/static/site/users/avatars/1000/2402.png",
  width : 100,
  height : 100,
  alt : "BMO"
}

class Image extends React.Component {
  render() {
    const imageSettings = this.props;
    return <img alt={imageSettings.alt} src={imageSettings.src} width={imageSettings.width} height={imageSettings.height}/>;
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
    const imageSettings = this.props.imageSettings;
    const text = this.props.children;
    
    const image = React.createElement(Image, imageSettings);
    const textbox = React.createElement(TextBox, null, text);
    return <div>{image}{text}</div>;
  }
}

ReactDOM.render(
    React.createElement(BlogItem, {imageSettings}, "hello"),
    document.getElementById("app")
);