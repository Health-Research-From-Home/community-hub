# Health Research from Home community hub

This is a static HTML, CSS, and JavaScript site published through GitHub Pages. The public site is available at:

`https://health-research-from-home.github.io/community-hub/`

## Editing the site

Page files such as `index.html`, `about.html`, and `ppie.html` are complete HTML documents containing their page-specific content.

Shared site elements are kept as ordinary HTML files:

- `Templates/header-home.html` contains the homepage header and navigation.
- `Templates/header-subpage.html` contains the subpage header and navigation.
- `Templates/footer.html` contains the site-wide footer.
- `Templates/template-loader.js` loads the appropriate templates into each page.

Each page loads the template manager in its `<head>`:

```html
<script src="Templates/template-loader.js" defer></script>
```

The shared elements are then positioned with these elements:

```html
<site-header variant="subpage" heading="Page heading"></site-header>

<!-- Page-specific content goes here. -->

<site-footer></site-footer>
```

The homepage uses `variant="home"` and does not need a `heading` attribute:

```html
<site-header variant="home"></site-header>
```

Update the relevant file in `Templates` when changing a header, navigation, or footer; the change will appear on every page that uses it. Responsive navigation is handled by `style.css`, so separate desktop and mobile templates are not needed.

## Creating a new page

1. Copy `Templates/new-page-template.html` into the repository root.
2. Rename the copy using a short lowercase filename, for example `technology.html`.
3. Follow the `CHANGE` comments to set the browser title, visible page heading, and page content.
4. Leave sections marked `KEEP` in place.
5. Add a link to the new page in the appropriate shared header template when it should appear in the navigation.

The starter file is intended to be copied into the repository root before previewing it because its stylesheet and template-loader paths are relative to that location.

## Local preview

No additional software or build step is required. In Visual Studio Code, right-click `index.html` and select **Open with Live Server**.

GitHub Pages should remain configured to deploy from the `main` branch and repository root. Pushing changes to that publishing source updates the site automatically.
