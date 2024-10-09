import { gql } from 'nuxt-graphql-request/utils';

export const addToCartMutation = gql`
  mutation addToCart($input: AddToCartInput!) {
    addToCart(input: $input) {
      cartItem {
        key
        quantity
        product {
          node {
            ... on SimpleProduct {
                  sku
                  slug
                  name
                  price(format: RAW)
                  image {
                    sourceUrl(size: LARGE)
                  }
                }
            }
        }
        variation {
          node {
            name
            databaseId
            salePrice(format: RAW)
            regularPrice(format: RAW)
            image {
              sourceUrl(size: WOOCOMMERCE_THUMBNAIL)
            }
          }
          attributes {
            value
          }
        }
      }
    }
  }
`;
