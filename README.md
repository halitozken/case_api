
# Case API

TurkTicaret.Net Node.js Case API


# API USAGE

### USER

#### Create User

```http
  POST http://localhost:3000/users
```

| Parameter | Type    |
| :-------- | :------- |
| `username`      | `string` |
| `password`      | `string` |

#### All Users

```http
  GET http://localhost:3000/users

```
#### Update User

```http
  UPDATE http://localhost:3000/users
```

| Parameter | Type    |
| :-------- | :------- |
| `username`      | `string` |
| `password`      | `string` |

#### Delete User

```http
  POST http://localhost:3000/users/{:id}
```

### PRODUCT

#### Create Product

```http
  POST http://localhost:3000/products
```

| Parameter | Type    |
| :-------- | :------- |
| `product_id`      | `number` |
| `title`      | `string` |
| `category_id`      | `number` |
| `category_title`      | `string` |
| `author`      | `string` |
| `password`      | `string` |
| `list_price`      | `number` |
| `stock_quantity`      | `number` |

#### All Products

```http
  GET http://localhost:3000/products
```

### CAMPAIGN

#### Create Campaign

```http
  POST http://localhost:3000/campaigns
```

| Parameter | Type    |
| :-------- | :------- |
| `campaign_name`      | `string` |

#### All Campaigns

```http
  GET http://localhost:3000/campaigns
```

### ORDER

#### Create Order

```http
  POST http://localhost:3000/orders
```

| Parameter | Type    |
| :-------- | :------- |
| `username`      | `number` |
| `products`      | `array` |


#### All Orders

```http
  GET http://localhost:3000/orders
```

#### Delete Order

```http
  DELETE http://localhost:3000/orders/{:id}
```
