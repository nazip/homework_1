class Image extends React.Component {
  render() {
    const {image} = this.props;
    return <img src={image.src} width={image.width} height={image.height} alt={image.alt}/>;
  }
}