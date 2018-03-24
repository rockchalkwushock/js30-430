const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
]

const people = [
  'Beck, Glenn',
  'Becker, Carl',
  'Beckett, Samuel',
  'Beddoes, Mick',
  'Beecher, Henry',
  'Beethoven, Ludwig',
  'Begin, Menachem',
  'Belloc, Hilaire',
  'Bellow, Saul',
  'Benchley, Robert',
  'Benenson, Peter',
  'Ben-Gurion, David',
  'Benjamin, Walter',
  'Benn, Tony',
  'Bennington, Chester',
  'Benson, Leana',
  'Bent, Silas',
  'Bentsen, Lloyd',
  'Berger, Ric',
  'Bergman, Ingmar',
  'Berio, Luciano',
  'Berle, Milton',
  'Berlin, Irving',
  'Berne, Eric',
  'Bernhard, Sandra',
  'Berra, Yogi',
  'Berry, Halle',
  'Berry, Wendell',
  'Bethea, Erin',
  'Bevan, Aneurin',
  'Bevel, Ken',
  'Biden, Joseph',
  'Bierce, Ambrose',
  'Biko, Steve',
  'Billings, Josh',
  'Biondo, Frank',
  'Birrell, Augustine',
  'Black, Elk',
  'Blair, Robert',
  'Blair, Tony',
  'Blake, William'
]

const data = [
  'car',
  'car',
  'truck',
  'truck',
  'bike',
  'walk',
  'car',
  'van',
  'bike',
  'walk',
  'car',
  'van',
  'car',
  'truck'
]

const fifteen = inventors.filter(({ year }) => year >= 1500 && year < 1600)
// console.log(fifteen)
const fullNames = inventors.map(({ first, last }) => `${first} ${last}`)
// console.log(fullNames)
const ordered = inventors.sort((a, b) => (a.year > b.year ? 1 : -1))
// console.log(ordered)
const x = inventors.reduce((acc, val) => {
  return acc + val.passed - val.year
}, 0)
// console.log(x)
const oldest = inventors.sort(
  (a, b) => (a.passed - a.year < b.passed - b.year ? 1 : -1)
)
// console.log(oldest)
// const category = document.querySelector('.mw-category')
// const links = [...category.querySelectorAll('a')] // Array.from() || [...NodeList]
// const de = links
//   .map(link.textContent)
//   .filter(streetName => streetName.includes('de'))
// console.log(de)
const alpha = people.sort((a, b) => {
  const [aLast, aFirst] = a.split(', ')
  const [bLast, bFirst] = b.split(', ')
  return aLast > bLast ? 1 : -1
})
// console.log(alpha)
const sum = data.reduce((acc, val) => {
  if (!acc[val]) {
    acc[val] = 0
  }
  acc[val]++
  return acc
}, {})
console.log(sum)
