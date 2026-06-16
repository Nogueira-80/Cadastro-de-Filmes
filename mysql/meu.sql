create database catalogo_filmes;
use catalogo_filmes;
create table filmes (
id int auto_increment primary key,
titulo varchar(100),
descricao text,
imagem varchar(255),
categoria varchar(50)
);
insert into filmes
(titulo, descricao, imagem, categoria)
values ("Vingadores", "filme da Marvel Studios", "https://media.themoviedb.org/t/p/w300_and_h450_face/A4kvp7vY1BDLrrQIagRCffLKj1t.jpg", "Super Heroes");

insert into filmes
(titulo, descricao, imagem, categoria)
values ("Backrooms", "Filme de suspense em outra dimenção", "https://media.themoviedb.org/t/p/w300_and_h450_face/a1pgQeEge47xrS4jGlDwIHiieVK.jpg", "Suspense");

insert into filmes
(titulo, descricao, imagem, categoria)
values ("Minecraft", "Um filme inspirado no jogo", "https://media.themoviedb.org/t/p/w300_and_h450_face/a227F8PnXDABR1JJTuasmJmxEhf.jpg", "Para qualquer idade");

insert into filmes
(titulo, descricao, imagem, categoria)
values ("Motoqueira Fantasma", "O espirito da Vingança", "https://media.themoviedb.org/t/p/w300_and_h450_face/vVGVlwRrvVgLPE98rwo8jo3QC2b.jpg", "Um filme da Marvel");

insert into filmes
(titulo, descricao, imagem, categoria)
values ("Todo mundo em panico", "Muita bagunça e diversão", "https://media.themoviedb.org/t/p/w300_and_h450_face/1z9haN6yiYsuv9D93H8n5yaCk8I.jpg", "Filme +17 ");

insert into filmes
(titulo, descricao, imagem, categoria)
values ("Gente Grande", "Muita bagunça e famila unida", "https://media.themoviedb.org/t/p/w300_and_h450_face/ppU2xJnlKdW3F01AtC9wMuXRZCg.jpg", "filme de Comedia ");

select * from filmes;