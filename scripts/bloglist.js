class BlogList extends React.Component {
    render() {
        return (
                <ul>
                    {_.map(
                     this.props.items, (item, key) => (
                                                    <li key={key}>
                                                        <BlogItem image={item.image}>{item.text} </BlogItem>
                                                    </li>
                                                    )
                     )}
                </ul>
        );
    }
}