import React, { Component } from 'react'
import FetchContributors from './fetch';
import Contributor from './contributor';

export default class Indexb extends Component {
  render() {
    return (
      <div>
        <FetchContributors repoPath="findmypast-oss/git-mob">{
          (contributorList) => contributorList.map((contributor) => {
            return <Contributor {...contributor} />
          })
        }</FetchContributors>
      </div>
    )
  }
}
