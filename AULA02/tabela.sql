create database sistema;
use sistema;

create table pessoa(
    id int auto_increment primary key,
    nome varchar(100) not null,
    sexo varchar(10)
);