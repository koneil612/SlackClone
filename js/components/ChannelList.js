import React from 'react';
import axios from 'axios';

export default class ChannelList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      channels: []
    };
  }

  componentDidMount() {
    axios.get(`https://slack.com/api/channels.list?&pretty=1.json`)
      .then(res => {
          console.log(res);
        const channels = res.data.channels;
        console.log("Channel array" + channels);
        this.setState({ channels });
        console.log(this.state);
      });
      console.log("Individual" + this.state.channels)
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.channels.map(channel =>
            <li key={channel.id}>{channel.name}</li>
          )}
        </ul>
      </div>
    );
  }
}
