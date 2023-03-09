const livros = ['CSS3','HTML5','Javascript','React','PHP'];
    let livros1 = livros.map((livro) => 'Livro'+ livro);
    let livros2 = livros.map((livro,index) => 'Livro' + index + " " + livro);

console.log(livros);
console.log(livros1);
console.log(livros2);


const livrosA = [
    {titulo: 'Construindo Sites com HTML', autor: "Mauricio"},
    {titulo: "Web Scrping com Python", autor:"Ryan"},
    {titulo: 'CSS3', autor:'Mauricio'}
];

let livrosx = livrosA.map((livro) => 'Livro: ' + livro.titulo);
let livrosy = livrosA.map((livro) => 'Autor: ' + livro.autor);

console.log(livrosx);
console.log(livrosy);