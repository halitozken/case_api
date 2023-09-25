
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

```json
{
    "username": 1,
    "products": [{
        "product_id": 1,
        "title": "İnce Memed",
        "category_id": 1,
        "category_title": "Roman",
        "author": "Yaşar Kemal",
        "list_price": 48.75,
        "stock_quantity": 10
	},
    {
        "product_id": 3,
        "title": "Kürk Mantolu Madonna",
        "category_id": 1,
        "category_title": "Roman",
        "author": "Sabahattin Ali",
        "list_price": 9,
        "stock_quantity": 4
    },
    {
        "product_id": 4,
        "title": "Fareler ve İnsanlar",
        "category_id": 1,
        "category_title": "Roman",
        "author": "John Steinback",
        "list_price": 35,
        "stock_quantity": 8
    },
    {
        "product_id": 5,
        "title": "Şeker Portakalı",
        "category_id": 1,
        "category_title": "Roman",
        "author": "Jose Mauro De Vasconcelos",
        "list_price": 33,
        "stock_quantity": 1
    },
    {
        "product_id": 7,
        "title": "Kara Delikler",
        "category_id": 3,
        "category_title": "Bilim",
        "author": "Stephen Hawking",
        "list_price": 39,
        "stock_quantity": 2
    },
    {
        "product_id": 11,
        "title": "Kuyucaklı Yusuf",
        "category_id": 1,
        "category_title": "Roman",
        "author": "Sabahattin Ali",
        "list_price": 10,
        "stock_quantity": 2
    }
]
}
```

#### All Orders

```http
  GET http://localhost:3000/orders
```

```json
{
        "track_id": 1,
        "status": "pending...",
        "createdDate": "2023-09-25T13:09:45.005Z",
        "updatedDate": "2023-09-25T13:09:45.005Z",
        "shipping_price": 0,
        "amount": 209,
        "discount_amount": 174,
        "products": [
            {
                "product_id": 1,
                "title": "İnce Memed",
                "category_id": 1,
                "category_title": "Roman",
                "author": "Yaşar Kemal",
                "list_price": 48,
                "stock_quantity": 10
            },
            {
                "product_id": 3,
                "title": "Kürk Mantolu Madonna",
                "category_id": 1,
                "category_title": "Roman",
                "author": "Sabahattin Ali",
                "list_price": 9,
                "stock_quantity": 4
            },
            {
                "product_id": 4,
                "title": "Fareler ve İnsanlar",
                "category_id": 1,
                "category_title": "Roman",
                "author": "John Steinback",
                "list_price": 35,
                "stock_quantity": 8
            },
            {
                "product_id": 5,
                "title": "Şeker Portakalı",
                "category_id": 1,
                "category_title": "Roman",
                "author": "Jose Mauro De Vasconcelos",
                "list_price": 33,
                "stock_quantity": 1
            },
            {
                "product_id": 7,
                "title": "Kara Delikler",
                "category_id": 3,
                "category_title": "Bilim",
                "author": "Stephen Hawking",
                "list_price": 39,
                "stock_quantity": 2
            },
            {
                "product_id": 11,
                "title": "Kuyucaklı Yusuf",
                "category_id": 1,
                "category_title": "Roman",
                "author": "Sabahattin Ali",
                "list_price": 10,
                "stock_quantity": 2
            }
        ]
    }
```


#### Delete Order

```http
  DELETE http://localhost:3000/orders/{:id}
```
