import React from "react"
import { Link } from "gatsby"

import Layout from '../Layout';

export default class Debug extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const edges = this.props.metadata;
    return (
      <Layout>
      <div>
        <h1>All Pages</h1>
        <table>
          <thead align="left">
            <tr>
              <th>Filename</th>
            </tr>
          </thead>
          <tbody>
            {edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.parent.name}</td>
                <Link to={node.fields.slug}>link</Link>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  </Layout>
    )
  }
}
