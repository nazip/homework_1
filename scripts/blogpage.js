const { PropTypes } = React;
const { bind } = _;

const items = 
        [
            {
                image: {
                    src: "../images/image_1.jpg",
                    width: 400,
                    height: 267,
                    alt: "banana"
                },
                meta: {
                    dtcreated: "2016-12-31 00:00",
                    dtcreatedhuman: "31 декабря 2016",
                    dtupdated: "2017-01-01 00:00",
                    dtupdatedhuman: "1 января 2017",
                    author: "Monkey",
                    likecount: 0
                },
                heading: "Monkey fight",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quas incidunt a facilis necessitatibus soluta mollitia iure tempore quidem, optio deserunt ut totam eos quos esse voluptatem animi officiis dolore adipisci nesciunt ea maxime eligendi, accusamus. Ut reiciendis, consequatur repellat reprehenderit inventore eaque explicabo nam, praesentium! Voluptates quae, excepturi ab. Commodi perferendis, amet consectetur illum deserunt, iure provident aut distinctio, officia assumenda ipsa delectus culpa odit mollitia dolores placeat unde, fuga error quod laborum incidunt dicta. Temporibus sequi voluptate consequuntur amet illum animi vel maiores."
            },

            {
                image: {
                    src: "../images/image_2.jpg",
                    width: 400,
                    height: 267,
                    alt: "banana"
                },
                meta: {
                    dtcreated: "2016-10-31 00:00",
                    dtcreatedhuman: "31 октября 2016",
                    dtupdated: "2016-11-31 00:00",
                    dtupdatedhuman: "31 ноября 2016",
                    author: "Banksy",
                    likecount: 10
                },
                heading: "New bridge",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quas incidunt a facilis necessitatibus soluta mollitia iure tempore quidem, optio deserunt ut totam eos quos esse voluptatem animi officiis dolore adipisci nesciunt ea maxime eligendi, accusamus. Ut reiciendis, consequatur repellat reprehenderit inventore eaque explicabo nam, praesentium! Voluptates quae, excepturi ab. Commodi perferendis, amet consectetur illum deserunt, iure provident aut distinctio, officia assumenda ipsa delectus culpa odit mollitia dolores placeat unde, fuga error quod laborum incidunt dicta. Temporibus sequi voluptate consequuntur amet illum animi vel maiores."
            },

            {
                image: {
                    src: "../images/image_3.jpg",
                    width: 400,
                    height: 267,
                    alt: "banana"
                },
                meta: {
                    dtcreated: "2016-12-31 00:00",
                    dtcreatedhuman: "31 декабря 2016",
                    dtupdated: "2017-01-01 00:00",
                    dtupdatedhuman: "1 января 2017",
                    author: "Santa",
                    likecount: 15
                },            
                heading: "Merry Christmas",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quas incidunt a facilis necessitatibus soluta mollitia iure tempore quidem, optio deserunt ut totam eos quos esse voluptatem animi officiis dolore adipisci nesciunt ea maxime eligendi, accusamus. Ut reiciendis, consequatur repellat reprehenderit inventore eaque explicabo nam, praesentium! Voluptates quae, excepturi ab. Commodi perferendis, amet consectetur illum deserunt, iure provident aut distinctio, officia assumenda ipsa delectus culpa odit mollitia dolores placeat unde, fuga error quod laborum incidunt dicta. Temporibus sequi voluptate consequuntur amet illum animi vel maiores."
            }
        ];

class TextBox extends React.Component {
  render() {
    return <p>{this.props.children}</p>;
  }
}

TextBox.propTypes = {
    children: PropTypes.string  
};

class Heading extends React.Component {
  render() {
    return <h4 className = { this.props.className }>{this.props.children}</h4>;
  }
}

Heading.propTypes = {
    className: PropTypes.string,
    children: PropTypes.string  
};

class Image extends React.Component {
  render() {
    const {image} = this.props;
    return <img className = {this.props.className} src={image.src} width={image.width} height={image.height} alt={image.alt}/>;
  }
}

Image.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    alt: PropTypes.string
};

class Like extends React.Component {
    constructor(props) {
        super(props);
        this.state = {likecount: props.likecount};
        
        this.handleClick = bind(this.handleClick,this);
    }
    handleClick() {
        this.setState( {likecount: this.state.likecount + 1} );
    }
  render() {
    return <button onClick= { this.handleClick } type="button" className= { this.props.className } >{ this.props.children } <span className="glyphicon glyphicon-heart"></span> { this.state.likecount }</button>;
  }
}

Like.defaultProps = {
    className: "btn btn-success",
    likecount: 0,
    children: "Like"
};

Like.propTypes = {
    className: PropTypes.string,
    children: PropTypes.string,
    likecount: PropTypes.number
};

class BlogItem extends React.Component {
    render() {
        const {meta} = this.props;
        const heading = this.props.children[0];
        const text = this.props.children[1];
        return (
                <div className="media">
                    <div className="meta">
                        <time className = "datetime meta-information" dateTime={ meta.dtcreated }><small>Дата создания: { meta.dtcreatedhuman }</small></time>
                        <time className = "datetime meta-information" dateTime={ meta.dtupdated }><small>Дата обновления: { meta.dtupdatedhuman }</small></time> 
                        <span className = "author-name meta-information"><small>Автор: { meta.author }</small></span>
                    </div>
                    <a className = "pull-left" href = "#">
                        <Image className = "media-object img-thumbnail" image = { this.props.image } /> 
                    </a> 
                    <div className = "media-body">
                        <Heading className = "media-heading">{ heading }</Heading>
                        <TextBox>{ text }</TextBox> 
                        <Like likecount={ meta.likecount } className="btn btn-success">Like</Like>
                    </div>
                </div>
                );
    }
}

BlogItem.propTypes = {
    children: PropTypes.arrayOf(PropTypes.string),
    image: PropTypes.object, 
    meta: PropTypes.object
};

class BlogList extends React.Component {
    render() {
        return (
                <ul className="blog-list">
                    {_.map(
                     this.props.items, (item, key) => (
                                                    <li key={key}>
                                                        <BlogItem image={item.image} meta={item.meta}>{ item.heading }{ item.text }</BlogItem>
                                                    </li>
                                                    )
                     )}
                </ul>
        );
    }
}

BlogList.propTypes = {
    items: PropTypes.array
};

class BlogPage extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {items};
    }
    render() {
        const {items} = this.state;
        return <BlogList items={items} />;
    }
}

ReactDOM.render(
    <BlogPage/>,
    document.getElementById("app")
);