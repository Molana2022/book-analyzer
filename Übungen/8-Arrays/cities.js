const cities = [
  { city: "Köln", bl: "Nordrhein-Westfalen", einwohner: 1000000 },
  { city: "Hannover", bl: "Niedersachsen", einwohner: 532000 },
  { city: "Kiel", bl: "Schleswig-Holstein", einwohner: 249000 },
  { city: "Frankfurt", bl: "Hessen", einwohner: 760000 },
  { city: "Aachen", bl: "Nordrhein-Westfalen", einwohner: 250000 },
  { city: "Darmstadt", bl: "Hessen", einwohner: 164000 },
  { city: "Husum", bl: "Schleswig-Holstein", einwohner: 24000 },
  { city: "Lübeck", bl: "Schleswig-Holstein", einwohner: 218000 }
];


const newarray1= cities.filter(city => (city.bl==='Schleswig-Holstein' || city.bl==='Hessen'));
console.log(newarray1);

const newarray2= cities.filter(city => (city.bl!=='Nordrhein-Westfalen' && city.einwohner <= 200000));
console.log(newarray2);



 