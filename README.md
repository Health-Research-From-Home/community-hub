# Health Research from Home community hub

This is a Jekyll site published through GitHub Pages. The public site is available beneath the repository path at:

`https://health-research-from-home.github.io/community-hub/`

## Editing the site

Page files such as `index.html`, `about.html`, and `ppie.html` contain only their page-specific content and a short YAML front matter block.

Shared site elements are maintained in one place:

- `_layouts/default.html` contains the document shell and shared metadata.
- `_includes/header.html` contains the home and subpage header variants.
- `_includes/navigation.html` contains the main navigation.
- `_includes/footer.html` contains the site-wide footer.
- `_config.yml` contains the GitHub Pages URL and repository base path.

Use Jekyll's `relative_url` filter for links and assets added to shared templates so they continue to work under the `/community-hub` repository path:

```liquid
{{ '/about.html' | relative_url }}
{{ '/Images/example.jpg' | relative_url }}
```

## Local preview

Install Ruby and Bundler, then run:

```shell
bundle install
bundle exec jekyll serve
```

Open `http://localhost:4000/community-hub/` in a browser.

GitHub Pages should be configured to deploy from the `main` branch and repository root. Pushing to that publishing source triggers the Jekyll build automatically.
