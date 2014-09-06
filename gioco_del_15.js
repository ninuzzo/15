// Stampa la tabellina.

// Ordine iniziale.
var tabellina = [
  [3, 1, 6, 2],
  [5, 7, 15, 13],
  [4, 11, 8, 9],
  [14, 10, 12, null]
];

document.write('<table>');
for (riga = 0; riga < 4; riga++) {
  document.write('<tr>');
  for (colonna = 0; colonna < 4; colonna++) {
    document.write('<td><button>' + tabellina[riga][colonna] + '</button>');
  }
}
document.write('</table>');
