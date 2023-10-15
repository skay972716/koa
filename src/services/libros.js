export default class Libros {
    constructor() {
        this.libros = ['100 años de soledad', 'El extranjero'];
    }
    init() {
        const result = this.libros.map(
            (libro, index) =>
                `${index + 1}.- ${libro} - ${this.generarEnlace(
                    'Prestar',
                    '/libros/prestar'
                )}<br>`
        );
        result.push(`${this.generarEnlace('Atras', '/')}`);
        return result.join('');
    }
    generarEnlace(cadena, link) {
        return `<a href='${link}'>${cadena}</a>`;
    }
}
