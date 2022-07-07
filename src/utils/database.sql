CREATE DATABASE vehicleAds;

CREATE TABLE IF NOT EXISTS vehicle(
    id serial PRIMARY KEY,
    name text NOT NULL,
    brand text NOT NULL,
    color text NOT NULL,
    year date NOT NULL,
    plate VARCHAR(7) NOT NULL,
    price number NOT NULL,
    favorite boolean default false,
    createdAt date NOT NULL

)

CREATE TABLE IF NOT EXISTS favorites(
    id serial PRIMARY KEY,
    id_vehicle seria references vehicle(id),
    isFavorite boolean default false

)