import React from 'react';
import axios from 'axios';

export default class LoadMessages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: []
    };
  }

  componentDidMount() {
    axios.post(`https://slack.com/api/channels.history?&channel=C4EB439J9&pretty=1.json`)
      .then(res => {
        const messages = res.data.messages;
        console.log("Channel array" + messages);
        this.setState({ messages });
        console.log(this.state);
      });
      console.log("Individual" + this.state.ts)
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.messages.map(message =>
            <li key={message.id}>{message.text} - {message.ts}</li>
        )}
        </ul>
      </div>
    );
  }
}
