DROP DATABASE IF EXISTS api_development;
CREATE DATABASE api_development;

\c api_development;

CREATE TABLE entries (
  ID SERIAL PRIMARY KEY,
  temp_low INTEGER,
  temp_hi INTEGER,
  current_day TIMESTAMP without time zone default (now() at time zone 'utc')
);

INSERT INTO entries ( temp_low, temp_hi )
VALUES ( 10, 99 );

---------------------------------------------------------------------------

DROP DATABASE IF EXISTS api_test;
CREATE DATABASE api_test;

\c api_test;

CREATE TABLE entries (
  ID SERIAL PRIMARY KEY,
  temp_low INTEGER,
  temp_hi INTEGER,
  current_day TIMESTAMP without time zone default (now() at time zone 'utc')
);
