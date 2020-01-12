// @flow strict
import { useStaticQuery, graphql } from 'gatsby';

const useDebugMetadata = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: {fields: fields___date, order: DESC}) {
          edges {
            node {
              parent {
                ... on File {
                  name
                }
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  );

  return allMarkdownRemark.edges;
};

export default useDebugMetadata;
