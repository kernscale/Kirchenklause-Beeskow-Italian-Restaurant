# Kirchenklause Beeskow Italian Restaurant Website

Next.js MVP website for **Kirchenklause Beeskow Italian Restaurant**.

## Local Development

```bash
npm install
npm run dev
```

Default dev server: `http://localhost:3006`

## Validation

```bash
npm run lint
npm run build
```

Both commands currently pass.

`npm run build` fetches Google Fonts via `next/font/google` and needs outbound access to `fonts.googleapis.com` and `fonts.gstatic.com` (unless fonts are self-hosted).

## Business Data Used (MVP)

- Name: Kirchenklause Beeskow Italian Restaurant
- Address: Kirchgasse 11, 15848 Beeskow
- Phone: 0162 2589562
- Opening hours: Daily 11:00-23:00
- Price range: EUR20-30
- Maps listing:
  `https://www.google.com/maps/place/Kirchenklause+Beeskow+Italian+Restaurant/@52.1716976,14.2278927,2602m/data=!3m1!1e3!4m6!3m5!1s0x4707ed489ebf4665:0x7eb3d23459df927a!8m2!3d52.171657!4d14.2477425!16s%2Fg%2F1w96ffzq?entry=ttu`

## MVP Assumptions

- Domain used in metadata/schema: `https://kirchenklause-beeskow.de`
- Contact email placeholder: `kontakt@kirchenklause-beeskow.de`
- Legal pages are placeholder-level and must be legally reviewed before go-live.

## Image Sources

- Hero image (`hero-kirchenklause-hq.jpg`) and gallery/menu images in `public/images/maps-*.jpg` were fetched from URLs surfaced on the Google Maps listing (`lh3.googleusercontent.com`).
- Production use should be rights-cleared with the restaurant owner and photographers.
