# Patrik Šmidoch — CV & Portfolio

This site is the online CV of **Patrik Šmidoch**, an HR Digi Trainee at CONECTIO Group and a grammar school student in Říčany, Czechia. It covers his projects, skills, certifications, and competitions in one scrollable page — in English or Czech.

**Open to:** internships, traineeships, and technical collaborations.

## What you'll find

- **About** — a short profile of where HR, technology, and analytics meet for him
- **Projects** — gyri_meal (school canteen menu scraper), Nand2Tetris (16-bit computer built from logic gates up), MicrosoftTechLearn (Azure / Power BI), Calculator, and Etch-a-Sketch
- **Skills** — programming and web, data and enterprise tooling, HR and recruitment, plus analytical disciplines
- **Certifications** — Linux Unhatched, MOOC.fi Python, and AP Psychology
- **Competitions** — Best in English and Biomechaton

## Using the site

| What you want | How to do it |
| --- | --- |
| Read in Czech or English | Toggle **EN / CZ** in the header (language switch is at the bottom of the mobile menu) |
| Switch to dark mode | Moon / sun button in the header |
| Get the full CV as a file | **Download CV (PDF)** in the header |
| Email him | **Copy Email** button in the hero — the address lands on your clipboard |
| Send a message or connect | **Let's Connect** panel at the bottom of the page, or use the links below |

## Contact

- **Email:** [patrik.smidoch@hotmail.com](mailto:patrik.smidoch@hotmail.com)
- **LinkedIn:** [linkedin.com/in/patriksmidoch](https://www.linkedin.com/in/patriksmidoch)
- **GitHub:** [github.com/rixicz](https://github.com/rixicz)
- **Location:** Prague, Czechia
- **Languages:** Czech (native), English (C1/C2)

---

## For developers

Built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. CV content for both languages lives in `src/data/cvData.ts`; the downloadable PDF is `public/Profile.pdf`.

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
npm run preview  # preview the build locally
```

Deployment to GitHub Pages is automated by `.github/workflows/deploy.yml` on pushes to `main`. In the repository, set **Settings → Pages → Source** to **GitHub Actions** once.
