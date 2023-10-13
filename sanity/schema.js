import gallary from './schemas/gallary'
import heroInfo from './schemas/heroInfo'
import liked from './schemas/liked'
import products from './schemas/products'
import users from './schemas/users'

export const schema = {
  types: [heroInfo, products, users, gallary, liked],
}
