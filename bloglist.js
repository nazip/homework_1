const DOM = React.DOM;

const settings = {
  src : "https://cdn.scratch.mit.edu/static/site/users/avatars/1000/2402.png",
  width : 100,
  height : 100,
  alt : "BMO"
}

const items = [
  {
    src : "https://cdn.scratch.mit.edu/static/site/users/avatars/1000/2402.png",
    text : "first",
    width : 100,
    height: 100
  },
  
  {
    src : "http://vignette2.wikia.nocookie.net/adventuretimewithfinnandjake/images/8/83/1AT_ice_king_character.png/revision/latest?cb=20110915231820",
    text : "second",
    width : 100,
    height: 150
  },
  
  {
    src : "http://vignette2.wikia.nocookie.net/adventuretimewithfinnandjake/images/d/d8/Candy_Person_111.png/revision/latest?cb=20120810072803",
    text : "third",
    width : 100,
    height: 100
  }
];

class Image extends React.Component {
  render() {
    const {settings} = this.props;
    return <img src={settings.src} width={settings.width} height={settings.height} alt={settings.alt}/>;
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
    console.log("BlogItem",this.props);
    const {settings} = this.props;
    const text = this.props.children;
    
    const image = React.createElement(Image, {settings});
    const textbox = React.createElement(TextBox, null, text);
    return React.createElement('div', null, image, textbox);
  }
}

class BlogList extends React.Component {
  render() {
    const {items} = this.props;
    console.log(items);
   return DOM.ul(
    null,
    _.map(
      items,
      (item, key) => {
        const settings = item;
        return DOM.li({ key }, React.createElement(BlogItem, {settings}, item.text));
      }
    )
  );
  }
}

ReactDOM.render(
    React.createElement(BlogList, {items}),
    document.getElementById("app")
);


