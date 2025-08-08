create database crud_db;
use crud_db;

create table usuarios(
    id int auto_increment primary key,
    nome varchar(100),
    email varchar(100)
);
insert into usuarios (nome, email) values ('João', 'joao@ig.com.br');