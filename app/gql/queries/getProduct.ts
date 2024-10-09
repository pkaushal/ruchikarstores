import { gql } from 'nuxt-graphql-request/utils';

export const getProductQuery = gql`
  query getProduct($slug: ID!, $sku: String!) {
    product(id: $slug, idType: SLUG) {
      ... on SimpleProduct {
        databaseId
        sku
        slug
        name
        price
        regularPrice
        salePrice
        description
        image {
          sourceUrl(size: LARGE)
        }
        galleryImages {
          nodes {
            sourceUrl(size: LARGE)
          }
        }
        productTypes {
          nodes {
            products(where: { stockStatus: IN_STOCK, search: $sku }) {
              nodes {
                slug
                image {
                  sourceUrl(size: WOOCOMMERCE_THUMBNAIL)
                }
              }
            }
          }
        }
        related(first: 50) {
          nodes {
            ... on SimpleProduct {
              sku
              slug
              name
              price
              regularPrice
              salePrice
              image {
                sourceUrl(size: WOOCOMMERCE_THUMBNAIL)
              }
              galleryImages {
                nodes {
                  sourceUrl(size: WOOCOMMERCE_THUMBNAIL)
                }
              }
            }
          }
        }
      }
    }
  }
`;
