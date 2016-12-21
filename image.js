const DOM = React.DOM;

const settings = {
  src : "https://cdn.scratch.mit.edu/static/site/users/avatars/1000/2402.png",
  width : 480,
  height : 480,
  alt : "BMO"
}

class ImageContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {settings} = this.props;
    return React.createElement(Image, {settings});
  }
}

const Image = (props) => {
  const {settings} = props;
  return <img src={settings.src} width={settings.width} height={settings.height} alt={settings.alt}/>
};

ReactDOM.render(
  React.createElement(ImageContainer, {settings}),
  document.getElementById("app")
);