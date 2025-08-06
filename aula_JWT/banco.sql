create database loja_play;
use loja_play;
create table usuarios(
  id int auto_increment primary key,
  login varchar(50) not null unique,
  senha varchar(255) not null
);