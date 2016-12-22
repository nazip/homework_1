const DOM = React.DOM;

const imageSettings = {
    src: "https://cdn.scratch.mit.edu/static/site/users/avatars/1000/2402.png",
    width: 100,
    height: 100,
    alt: "BMO"
}

const items = [
    {
        image: {
            src: "https://cdn.scratch.mit.edu/static/site/users/avatars/1000/2402.png",
            width: 100,
            height: 100
        },
        text: "first"
  },

    {
        image: {
            src: "https://cdn.scratch.mit.edu/static/site/users/avatars/1000/2402.png",
            width: 100,
            height: 100
        },
        text: "second"
  },

    {
        image: {
            src: "https://cdn.scratch.mit.edu/static/site/users/avatars/1000/2402.png",
            width: 100,
            height: 100
        },
        text: "third"
  },
    {
        image: {
            src: "https://cdn.scratch.mit.edu/static/site/users/avatars/1000/2402.png",
            width: 100,
            height: 100
        },
        text: "fourth"
  }

];

class Image extends React.Component {
    render() {
        const {imageSettings} = this.props;
        return <img src = {imageSettings.src}
        width = {imageSettings.width}
        height = {imageSettings.height}
        alt = {imageSettings.alt}/>;
    }
}

class TextBox extends React.Component {
    render() {
        return <span > {this.props.children} < /span>;
    }
}

class BlogItem extends React.Component {
    render() {
        const {imageSettings} = this.props;
        const text = this.props.children;

        const image = React.createElement(Image, {imageSettings});
        const textbox = React.createElement(TextBox, null, text);
        return React.createElement('div', null, image, textbox);
    }
}

class BlogList extends React.Component {
    render() {
        const { items } = this.props;
        return DOM.ul(
            null,
            _.map(
                items, (item, key) => {
                    const imageSettings = item.image;
                    return DOM.li({ key }, React.createElement(BlogItem, {imageSettings}, item.text));
                }
            )
        );
    }
}

ReactDOM.render(
    React.createElement(BlogList, {
        items
    }),
    document.getElementById("app")
);