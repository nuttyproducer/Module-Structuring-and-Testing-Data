function getRandomName() {
  const firstNames = [
    "Markske",
    "Kutloperke",
    "Lully",
    "Depkop",
    "Ketellekker",
    "Pietneus",
    "Zeiki",
  ];
  const lastNames = [
    "Zeiverkloewet",
    "Diknekker",
    "Kontelare",
    "Reuthufters",
    "Viezerling",
    "Keutelteen",
  ];

  const firstIndex = Math.floor(Math.random() * firstNames.length);
  const lastIndex = Math.floor(Math.random() * lastNames.length);

  const firstName = firstNames[firstIndex];
  const lastName = lastNames[lastIndex];

  return `Hello ${firstName} ${lastName}`;
}

console.log(getRandomName());
