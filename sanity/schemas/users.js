import products from "./products"

const users = {
  name: 'users',
  title: 'Users',
  type: 'document',
  fields: [
    {
      name: 'username',
      title: 'Username',
      type: 'string',
    },
    {
      name: 'password',
      title: 'Password',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'history',
      title: 'Purchase History',
      type: 'array',
      of: [
        {
          name: 'purchased products',
          type: 'document',
          fields: [
            {
              name: 'productTitle',
              title: 'Product Title',
              type: 'string'
            },
            {
              name: 'productIds',
              title: 'Product Id',
              type: 'string'
            }
          ]
        }
      ],
    }
  ]
}

export default users