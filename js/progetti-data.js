/*
 * Dati dei progetti — fonte unica per l'indice "Progetti" (progetti.html)
 * e, in futuro, per le pagine singole di ciascun progetto.
 *
 * Campi:
 *   order    - numero progressivo mostrato in pagina
 *   name     - nome del progetto
 *   claim    - frase-identità del progetto
 *   image    - percorso dell'immagine. Tutti i valori attuali sono
 *              PLACEHOLDER (SVG generati in images/placeholder/) in attesa
 *              delle foto reali: basta sostituire il file mantenendo lo
 *              stesso nome (o aggiornare il percorso qui) per andare live.
 *   alt      - testo alternativo descrittivo dell'immagine
 *   slug     - identificativo breve del progetto, riusabile per una
 *              futura pagina singola (es. "progetto-<slug>.html")
 *   href     - URL della pagina di dettaglio, se già esistente
 *   linkable - true solo se la pagina di dettaglio esiste già
 */
window.PROGETTI_PROJECTS = [
  {
    order: 1,
    name: "Villa E|I",
    claim: "Una casa nata da un cambiamento di direzione.",
    image: "images/placeholder/placeholder-villa-e-i.svg",
    alt: "Placeholder fotografico per Villa E|I — foto reale del progetto in arrivo",
    slug: "villa-e-i",
    href: "progetto-villa-e-i.html",
    linkable: true
  },
  {
    order: 2,
    name: "Villa D|P",
    claim: "Una casa che sceglie di guardare altrove.",
    image: "images/villa-d-p/hero-vista-esterna-5b.jpg",
    alt: "Vista esterna della facciata di Villa D|P",
    slug: "villa-d-p",
    href: "progetto-villa-d-p.html",
    linkable: true
  },
  {
    order: 3,
    name: "Villa L|J",
    claim: "Una casa che porta il paesaggio dentro, senza rinunciare all'intimità.",
    image: "images/placeholder/placeholder-villa-l-j.svg",
    alt: "Placeholder fotografico per Villa L|J — foto reale del progetto in arrivo",
    slug: "villa-l-j",
    href: null,
    linkable: false
  },
  {
    order: 4,
    name: "Villa E|L",
    claim: "Una casa pensata per crescere con chi la abita.",
    image: "images/placeholder/placeholder-villa-e-l.svg",
    alt: "Placeholder fotografico per Villa E|L — foto reale del progetto in arrivo",
    slug: "villa-e-l",
    href: null,
    linkable: false
  },
  {
    order: 5,
    name: "Villa S",
    claim: "Ricostruire senza cancellare.",
    image: "images/placeholder/placeholder-villa-s.svg",
    alt: "Placeholder fotografico per Villa S — foto reale del progetto in arrivo",
    slug: "villa-s",
    href: null,
    linkable: false
  },
  {
    order: 6,
    name: "Padiglione C",
    claim: "Un prototipo rimasto esemplare unico.",
    image: "images/placeholder/placeholder-padiglione-c.svg",
    alt: "Placeholder fotografico per Padiglione C — foto reale del progetto in arrivo",
    slug: "padiglione-c",
    href: null,
    linkable: false
  },
  {
    order: 7,
    name: "Villa L|R",
    claim: "Una casa che parla di chi la abita.",
    image: "images/placeholder/placeholder-villa-l-r.svg",
    alt: "Placeholder fotografico per Villa L|R — foto reale del progetto in arrivo",
    slug: "villa-l-r",
    href: null,
    linkable: false
  },
  {
    order: 8,
    name: "Villa M|M",
    claim: "Due case gemelle, un'unica radice, due vite diverse.",
    image: "images/placeholder/placeholder-villa-m-m.svg",
    alt: "Placeholder fotografico per Villa M|M — foto reale del progetto in arrivo",
    slug: "villa-m-m",
    href: null,
    linkable: false
  },
  {
    order: 9,
    name: "Casa R|D",
    claim: "Dare nuova vita a una memoria di famiglia.",
    image: "images/placeholder/placeholder-casa-r-d.svg",
    alt: "Placeholder fotografico per Casa R|D — foto reale del progetto in arrivo",
    slug: "casa-r-d",
    href: null,
    linkable: false
  },
  {
    order: 10,
    name: "Villa A|F",
    claim: "Due progetti autonomi nati dallo stesso metodo.",
    image: "images/placeholder/placeholder-villa-a-f.svg",
    alt: "Placeholder fotografico per Villa A|F — foto reale del progetto in arrivo",
    slug: "villa-a-f",
    href: null,
    linkable: false
  }
];
