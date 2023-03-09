const livros = [
    {titulo: 'Construindo Sites com HTML', autor:'Mauricio'},
    {titulo: 'Web Scraping com Python', autor:'Ryan'},
    {titulo: 'CSS3', autor:'Mauricio'}
]

let livros1 = livros.filter((livro)=> livro.autor === 'Mauricio');
let livros2 = livros.filter((livro)=> livro.titulo === 'CSS3');
let livros3 = livros.filter((livro)=> livro.titulo.includes('com'));

console.log(livros1);
console.log(livros2);
console.log(livros3);
