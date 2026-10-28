# Harpuneet Singh — portfolio setup

## Publish on GitHub Pages

The intended address is https://harpuneet2005.github.io/ based on the GitHub username in your resume. It has been added to both documents, but **has not been published or verified live**. Enable Pages before sending these documents in applications. If you choose another address, update the `href` in both `.tex` headers, recompile, and replace the website PDFs.

1. Sign in to GitHub as **Harpuneet2005**.
2. Create a public repository named **Harpuneet2005.github.io**. If it already exists, download a backup and use that repository; do not overwrite an existing site without reviewing it.
3. Extract `Harpuneet-Singh-Website.zip` on your computer.
4. In the repository, choose **Add file → Upload files**. Upload the extracted contents, not the ZIP and not a containing folder. The repository root must contain `index.html`, `projects.html`, `publications.html`, `cv.html`, and `assets/`.
5. Commit the files to `main`.
6. Open **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**, then **main** and **/(root)**. Click **Save**.
7. Wait for the Pages deployment to complete (GitHub says changes can take up to 10 minutes). Open the URL shown in Pages settings.
8. Check all four top links, the CV preview, both PDF downloads, and a project filter.

No npm, framework, paid hosting, custom domain, or build configuration is needed. `.nojekyll` is included; if your file picker hides it, you can add an empty file named `.nojekyll` using GitHub's Create new file option. All links are relative, so the site also supports a project repository; its URL would then include the repository name and the document website links would need updating.

Official guide: https://docs.github.com/en/pages/quickstart

## Add your photograph

1. Crop a photo to approximately 640 × 760 pixels and save it as `portrait.jpg` (ideally below 300 KB).
2. Upload it to `assets/images/`.
3. In `index.html`, replace `assets/images/portrait.svg` with `assets/images/portrait.jpg`.
4. Change the image's alt text to `Harpuneet Singh` and remove or rewrite the “photo coming soon” caption.
5. Commit. GitHub Pages will update automatically.

## Edit the site

- About, contact links, education, honours, and service: `index.html`.
- All 12 project entries: `projects.html`; each project has a stable ID for direct links.
- Publication entry: `publications.html`; citation file: `assets/publications.bib`.
- CV viewer and download buttons: `cv.html`.
- Colours, type, spacing, and responsive layouts: `assets/style.css`.
- Optional project filtering: `assets/site.js`. Content and navigation still work without JavaScript.
- Keep duplicate navigation/footer text consistent across the four HTML files.
- For a new project, duplicate an `<article class="project">`, use a unique `id`, choose Sensing/Hardware/Software in `data-category`, and update the “All projects” count.

You can double-click `index.html` to preview locally. Some browsers restrict embedded PDFs for local files; direct PDF download/open links remain available. For a full local preview with Python installed, run `python -m http.server 8000` inside the extracted site folder and visit http://localhost:8000.

## Edit the CV or resume

Editable `.tex` files are in `Harpuneet-Singh-LaTeX.zip`.

Overleaf: New Project → Upload Project → choose that ZIP. Set `Harpuneet-Singh-CV.tex` as the main document and compile with **pdfLaTeX**. Set `Harpuneet-Singh-Resume.tex` as the main document to compile the one-page resume.

Locally: `pdflatex Harpuneet-Singh-CV.tex` and `pdflatex Harpuneet-Singh-Resume.tex` (run twice when changing links or document structure).

Replace the PDFs in `assets/documents/` using exactly the same filenames so the website's viewer and download buttons stay current. The PDFs in the website ZIP already contain the reconciled final versions.

## Content reconciliation

- Resume is authoritative for graduation (December 2028), research dates, performance figures, and project names.
- Both older CV sources were used, because the CV PDF and `cv.tex` contain different material.
- Retained STEMabled, Tendril, EzOCR, Shoolini University, SuprStudent, Blueprint, UTMIST, earlier schools, awards/funding, research supervisors, and additional technical skills.
- Treat AmarGas and AgroArmor as the same biogas project, and SWIM and Mersivity as the same research work, rather than double-counting them.
- Used the resume's three SWIM devices (not the old PDF's eight), 7 ns LED switching (not 10 ns), and updated cognitive-restructuring figures (40% / 30%).
- Publication verified at https://doi.org/10.7490/f1000research.1120482.1: a conference poster published 24 February 2026, presented at the Laidlaw Scholars Annual Conferences 2025. It is labelled as a poster rather than a peer-reviewed journal article.
- Project performance claims come from the supplied documents; no new claims were inferred from collaborators' sites.
- Current professional email, GitHub, and LinkedIn are used for public contact. The phone number appears only in the older CV PDF and was not copied into the public website.

## Design references reviewed

Light backgrounds, readable academic profiles, clear navigation, and restrained blue/pastel accents were informed by the supplied examples, without copying their content or images:

https://dhruv-verma.com/
https://mariakakis.github.io/
https://www.sejalbhalla.com/
https://www.cs.toronto.edu/~sliaqat/
https://brennal.github.io/
https://helen-li.github.io/
https://shivesh777.github.io/
https://sites.google.com/view/sixuan-wu/
