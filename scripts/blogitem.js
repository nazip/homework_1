class BlogItem extends React.Component {
    render() {
        return (
                <div>
                    <Image image = { this.props.image } /> 
                    <TextBox> {this.props.children} </TextBox>
                </div>
                );
    }
}