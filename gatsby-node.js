exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;

  if (page.matchPath || page.path.match(/dev-404-page/)) {
    return;
  }

  page.matchPath = page.path.match(/\/$/) ? `${page.path}*` : `${page.path}/*`;
  createPage(page);
};
