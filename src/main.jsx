import * as React from 'react';
import * as ReactDOM from 'react-dom';

const posts = [
  {title: "Awesome Post 1", replies: [
    {text: "Great post ... well done"}]},
  {title: "Awesome Post 2", replies: [
    {text: "Great post ... well done"}]},
  {title: "Awesome Post 3", replies: [
    {text: "Great post ... well done"}]},
  {title: "Awesome Post 4", replies: [
    {text: "Great post ... well done"}]},
]

class ReplyBox extends React.Component {
  constructor(props){
    super(props);
    this.state={
      text:'',
      photoAdded: false,
    }
  }
_switch() {
  this.setState({ on: !this.state.on });
}
_handleChange(event) {
  this.setState({text: event.target.value });
}

_togglePhoto(){
  this.setState({photoAdded: !this.state.photoAdded });
}
_remainingChars() {
  if(this.state.photoAdded) {
    return 140 - 27 - this.state.text.length;
  }
  else{
    return 140 - this.state.text.length;
  }
}
_overflowAlert(){

  const overflowText = this.state.photoAdded ?
  this.state.text.substring((140-27), this.state.text.length) : this.state.text.substring(140, this.state.text.length)


  if (this._remainingChars() < 0){
    return(
      <div className="alert alert-warning"><strong> Oops. You dont have room for these characters:
       {overflowText}</strong></div>
    )
  }else{
return '';
  }
}
  render() {
    return (
      <div className="well clearfix">

        {this._overflowAlert()}
        <h3> Replying to : {this.props.post.title} </h3>
        <textarea  onChange={this._handleChange.bind(this)} className="form-control"></textarea>
        <br/>
        <span>{this._remainingChars() }</span>
        <button className="btn btn-primary pull-right"
        disabled={this._remainingChars() === 140 || this._remainingChars() < 0}>Submit
        </button>
        <button
        onClick={ this._togglePhoto.bind(this)}
        className="btn btn-default pull-right">
        { !this.state.photoAdded ? 'Add Photo' : 'Photo Added'}
       </button>
      </div>
    )
  }
  }

  class App extends React.Component {
    _renderReplies(post) {
      return (<div>
            <h3> Replies: </h3>
          { post.replies.map((reply, index)=>{
          return (
              <h3 key={index}>
              { reply.text }
              </h3>
          )
        })}
        </div>)
      }
    render() {
      return (<div>
        <h1> Posts & Replies!</h1>
         { posts.map((post, index)=>{
           return(
             <div key={index}>
                   <h2> Post Title : {post.title}</h2>
                   {post.replies.length ? this._renderReplies(post) : ''}
                   <ReplyBox post={post}/>
             </div>
           )
         }) }
        </div>)
    }
  }


ReactDOM.render(<App/>,document.getElementById('react-app'));
