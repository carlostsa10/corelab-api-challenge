CREATE DATABASE vehicleAds;

CREATE TABLE IF NOT EXISTS vehicles(
    id serial PRIMARY KEY,
    name text NOT NULL,
    brand text NOT NULL,
    color text NOT NULL,
    year date NOT NULL,
    plate VARCHAR(7) NOT NULL,
    favorite boolean default false,
    createdAt date

)

CREATE TABLE IF NOT EXISTS favorites(

)