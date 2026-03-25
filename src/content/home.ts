export type MenuItem = {
  name: string;
  description: string;
  price: string;
  category: string;
};

export type HomeContent = {
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  menu: MenuItem[];
  highlights: string[];
};

export const homeContent: HomeContent = {
  hero: {
    title: "Mecklenburger Spezialitäten.",
    subtitle: "Mudder-Schulten-Stuben in Neubrandenburg",
    cta: "Speisekarte entdecken",
  },
  highlights: [
    "Familiengeführt seit 1993",
    "Sommergarten mit 60 Sitzplätzen",
    "Regionale und saisonale Küche",
    "Warme Küche 11:30 bis 21:30 Uhr",
  ],
  menu: [
    { name: "Klare Fischsuppe", description: 'nach Art der "Mudder-Schulten"', price: "Preis auf Anfrage", category: "suppen" },
    { name: "Soljanka", description: 'Eine "Russische Spezialität" nach Art des Hauses', price: "Preis auf Anfrage", category: "suppen" },
    { name: "Schlesische Knoblauchsuppe", description: "mit Käse, Schinken und Croutons", price: "Preis auf Anfrage", category: "suppen" },

    { name: "Welsfilet", description: "gebraten, mit Champignons, Paprika, Zwiebeln und Käse überbacken", price: "Preis auf Anfrage", category: "fischgerichte" },
    { name: "Gemischte Fischplatte", description: "Filet vom Zander und Seelachs auf Fisch-Rahm-Sauce", price: "Preis auf Anfrage", category: "fischgerichte" },
    { name: "Dorschfilet", description: "auf frischem Gemüse in Sahnesauce mit Käse überbacken", price: "Preis auf Anfrage", category: "fischgerichte" },
    { name: "Forelle, nach Art der Müllerin", description: "fangfrisch gebraten oder gedünstet mit Gemüsefüllung", price: "Preis auf Anfrage", category: "fischgerichte" },
    { name: "Zanderfilet", description: "gebraten oder gedünstet, mit Broccoli auf Fisch-Rahm-Sauce", price: "Preis auf Anfrage", category: "fischgerichte" },

    { name: "Putenbruststeak auf orientalische Art", description: "mit Ananas, Käse überbacken und grünen Erbsen", price: "Preis auf Anfrage", category: "gefluegelgerichte" },

    { name: "Rinderroulade", description: "nach Hausfrauenart, mit Rotkohl", price: "Preis auf Anfrage", category: "rind" },
    { name: "Rumpsteak 200 g", description: "mit Kräuterbutter und frischen Champignons", price: "Preis auf Anfrage", category: "rind" },
    { name: "Mastochsensteak 250 g", description: "aus Filet mit Kräuterbutter und Broccoli", price: "Preis auf Anfrage", category: "rind" },

    { name: "Steak ou four", description: "Würzfleisch auf Steak, mit Käse überbacken", price: "Preis auf Anfrage", category: "schwein" },
    { name: "Bauernschmaus", description: "gefülltes Filet mit Schinken und Pilzen", price: "Preis auf Anfrage", category: "schwein" },
    { name: "3 Schweinemedaillons", description: "auf Pfeffersauce, mit Broccoli und Kräuterbutter", price: "Preis auf Anfrage", category: "schwein" },
    { name: 'Steak "Balkan"', description: "mit würzigem Paprika-Tomaten-Wurst-Letscho", price: "Preis auf Anfrage", category: "schwein" },
    { name: "Eisbein, gepökelt", description: "mit Sauerkraut und Erbspürree", price: "Preis auf Anfrage", category: "schwein" },

    { name: "Metzgerplatte", description: "halbes Eisbein, Rippenbraten und kleines Schweinesteak", price: "Preis auf Anfrage", category: "chefempfehlung" },
    { name: "Kloppschinken", description: "paniert und zubereitet wie ein Schnitzel", price: "Preis auf Anfrage", category: "chefempfehlung" },
    { name: 'Rippenbraten "Mecklenburger Art"', description: "mit Backpflaumen, Äpfeln und Rosinen", price: "Preis auf Anfrage", category: "chefempfehlung" },
    { name: "Känguru Rückensteak", description: "rosa gebraten, mit Portweinsauce und Brombeeren", price: "Preis auf Anfrage", category: "chefempfehlung" },
    { name: "Kutscherteller", description: "Schweinefilet, Rindsteak und Putenbrust auf Pfeffersauce", price: "Preis auf Anfrage", category: "chefempfehlung" },

    { name: "Hirschbraten", description: "in Wachholdersauce mit frischen Champignons", price: "Preis auf Anfrage", category: "wildgerichte" },
    { name: "Wildschweinbraten", description: "in böhmischer Sauce mit Apfelrotkohl", price: "Preis auf Anfrage", category: "wildgerichte" },
  ],
};
