import React, { Component } from 'react'

export default class FetchContributors extends Component {
  constructor() {
    super();
    this.state = {
      contributorList: []
    };
  }

  fetchContributors = repoPath => {
    fetch(`https://api.github.com/repos/${repoPath}/stats/contributors`)
      .then(data => data.json())
      .then(data => {
        return data.map(({ total, author }) => ({
          total: total,
          username: author.login,
          avatar: author.avatar_url,
          id: author.id
        }));
      })
      .then(contributorList => {
        this.setState({
          contributorList
        });
      });
  };

  componentDidMount() {
    this.fetchContributors(this.props.repoPath);
  }

  render() {
    const { contributorList } = this.state;
    return (
      <div>
        {this.props.children(contributorList)}
      </div>
    );
  }
}