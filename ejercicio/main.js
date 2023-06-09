
const usuarios = [
  {
    nombre: 'Erik',
    edad: 29,
    correo: 'erik@academlo.com',
    social: [
      { nombre: 'facebook', url: 'facebook/erik' },
      { nombre: 'twitter', url: 'twitter/erik' }
    ],
    genero: 'Male'
  },
  {
    nombre: 'Georg',
    edad: 33,
    correo: 'georg@academlo.com',
    social: [
      { nombre: 'facebook', url: 'facebook/georg' },
      { nombre: 'twitter', url: 'twitter/georg' }
    ],
    genero: 'Male'
  },
  {
    nombre: 'Andrea',
    edad: 42,
    correo: 'andrea@hotmail.com',
    social: [
      { nombre: 'facebook', url: 'facebook/andrea' },
      { nombre: 'twitter', url: 'twitter/andrea' }
    ],
    genero: 'Female'
  },
  {
    nombre: 'Oscar',
    edad: 31,
    correo: 'oscar@academlo.com',
    social: [
      { nombre: 'facebook', url: 'facebook/oscar' },
      { nombre: 'twitter', url: 'twiter/oscar' }
    ],
    genero: 'Male'
  },
  {
    nombre: 'Daniela',
    edad: 22,
    correo: 'daniela@uaq.mx',
    social: [
      { nombre: 'facebook', url: 'facebook/andrea' },
      { nombre: 'twitter', url: 'twitter/andrea' }
    ],
    genero: 'Female'
  }
];

// Primer Ejercicio
const userTableEmail = document.getElementById('user-table-email');

const usersWithEmailAcademlo = usuarios.filter(user => user.correo.endsWith('@academlo.com'));

const tableEmail = document.createElement('table');
const tableEmailHeader = tableEmail.createTHead();
const tableEmailRow = tableEmailHeader.insertRow();
const tableEmailHeaders = ['Nombre', 'Edad', 'Correo', 'Género'];

tableEmailHeaders.forEach(headerText => {
  const th = document.createElement('th');
  const text = document.createTextNode(headerText);
  th.appendChild(text);
  tableEmailRow.appendChild(th);
});

const tableEmailBody = tableEmail.createTBody();
usersWithEmailAcademlo.forEach(user => {
  const row = tableEmailBody.insertRow();
  const nameCell = row.insertCell();
  const ageCell = row.insertCell();
  const emailCell = row.insertCell();
  const genderCell = row.insertCell();

  nameCell.appendChild(document.createTextNode(user.nombre));
  ageCell.appendChild(document.createTextNode(user.edad));
  emailCell.appendChild(document.createTextNode(user.correo));
  genderCell.appendChild(document.createTextNode(user.genero));
});

userTableEmail.appendChild(tableEmail);

// Segundo Ejercicio
const userTableRange = document.getElementById('user-table-range');

const usersInRange = usuarios.filter(user => user.edad >= 20 && user.edad <= 40);

const tableRange = document.createElement('table');
const tableRangeHeader = tableRange.createTHead();
const tableRangeRow = tableRangeHeader.insertRow();
const tableRangeHeaders = ['Nombre', 'Edad', 'Correo', 'Género'];

tableRangeHeaders.forEach(headerText => {
  const th = document.createElement('th');
  const text = document.createTextNode(headerText);
  th.appendChild(text);
  tableRangeRow.appendChild(th);
});

const tableRangeBody = tableRange.createTBody();
usersInRange.forEach(user => {
  const row = tableRangeBody.insertRow();
  const nameCell = row.insertCell();
  const ageCell = row.insertCell();
  const emailCell = row.insertCell();
  const genderCell = row.insertCell();

  nameCell.appendChild(document.createTextNode(user.nombre));
  ageCell.appendChild(document.createTextNode(user.edad));
  emailCell.appendChild(document.createTextNode(user.correo));
  genderCell.appendChild(document.createTextNode(user.genero));
});

userTableRange.appendChild(tableRange);

// Tercer Ejercicio
const userTableInfo = document.getElementById('user-table-info');

const tableInfo = document.createElement('table');
const tableInfoHeader = tableInfo.createTHead();
const tableInfoRow = tableInfoHeader.insertRow();
const tableInfoHeaders = ['Nombre', 'Edad', 'Correo', 'Género', 'Redes Sociales'];

tableInfoHeaders.forEach(headerText => {
  const th = document.createElement('th');
  const text = document.createTextNode(headerText);
  th.appendChild(text);
  tableInfoRow.appendChild(th);
});

const tableInfoBody = tableInfo.createTBody();
usuarios.forEach(user => {
  const row = tableInfoBody.insertRow();
  const nameCell = row.insertCell();
  const ageCell = row.insertCell();
  const emailCell = row.insertCell();
  const genderCell = row.insertCell();
  const socialCell = row.insertCell();

  nameCell.appendChild(document.createTextNode(user.nombre));
  ageCell.appendChild(document.createTextNode(user.edad));
  emailCell.appendChild(document.createTextNode(user.correo));
  genderCell.appendChild(document.createTextNode(user.genero));

  const socialList = document.createElement('ul');
  user.social.forEach(social => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = social.url;
    link.target = '_blank';
    link.appendChild(document.createTextNode(social.nombre));
    listItem.appendChild(link);
    socialList.appendChild(listItem);
  });

  socialCell.appendChild(socialList);
});

userTableInfo.appendChild(tableInfo);
