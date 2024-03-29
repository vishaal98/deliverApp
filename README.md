# Food Delivery App

The Food Delivery App is a REST API that facilitates APIs for food delivery services. It includes features for calculating the delivery cost based on various factors such as distance, item type, and organization along with basic CRUD operations. This README provides an overview of the application, instructions for setting it up locally, and documentation for using its API endpoints.

## Table of Contents

- [Overview](#overview)
- [Explore API endpoints](#explore-api-endpoints)
- [Setup to local](#setup-to-local)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Future Scope](#future-scope)

## Overview

The Food Delivery App allows users to create/delete orgnizations and items. Allows users to calculate the delivery cost for different types of food items across various zones. It dynamically determines pricing based on the base distance and price, as well as per kilometer prices for perishable and non-perishable items. The application is built using Node.js for the backend, with Express.js as the web framework and PostgreSQL for the database.

## Explore API endpoints
For the live application the DB is being deployed in Vercel and the API service is deployed in Render.

You can explore the API endpoints using the Swagger documentation available at [Swagger Page](https://deliverapp.onrender.com/api-docs/).

## Setup to local

Setup the Database
1. **Download and install postgreSQL**
2. **connect and access postgresSQL through command line or some GUI applications like TablePlus**
3. **Create the Database and Tables with below commands**

```bash
CREATE DATABASE anyName;

CREATE TABLE organization (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE item (
    id SERIAL PRIMARY KEY,
    type VARCHAR(20) NOT NULL,
    description VARCHAR(255) NOT NULL
);

CREATE TABLE pricing (
    organization_id INTEGER REFERENCES organizations(id),
    item_id INTEGER REFERENCES items(id),
    zone VARCHAR(50) NOT NULL,
    base_distance_in_km INTEGER NOT NULL,
    km_price INTEGER NOT NULL,
    fix_price INTEGER NOT NULL,
    PRIMARY KEY (organization_id, item_id, zone)
);
```

To set up the Food Delivery App locally, follow these steps:

1. **Clone the Repository**: 
   ```bash
   git clone https://github.com/vishaal98/deliverApp.git

2. **Install Dependencies**
    ```bash
    cd deliverApp
    npm install

3. **Setup environment variables with .env file**
    ```bash
    DB_URL=your-postgres-connection-string
    PORT=your-port-number

4. **Start the server**
    ```bash
    npm start

## API Endpoints

### 1. Calculate Delivery Cost

- **URL**: `/v1/price/calculate`
- **Method**: `POST`
- **Request Body**:
```json
{
  "zone": "downtown",
  "organization_id": 5,
  "total_distance": 12,
  "item_type": "perishable"
}
```
- **Response**
```json
{
    "total_price": {
        "in_cents": 1950,
        "in_Euros": 19.5
    }
}
```

## Usage

To use the Food Delivery App, you can make HTTP requests to the provided API endpoints using tools like cURL or Postman. Here's an example cURL command to calculate delivery cost:

```bash
curl -X POST \
  http://localhost:<PORT>/v1/price/calculate \
  -H 'Content-Type: application/json' \
  -d '{
    "zone": "downtown",
    "organization_id": 5,
    "total_distance": 12,
    "item_type": "perishable"
  }'
```

## Future Scope
1. **Add Authentication**
2. **Restrict access to certain APIs with authorisation**
3. **More API endpoints to interact with the Application**
4. **Frontend APP to interact with app in GUI friendly way**
