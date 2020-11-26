const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("README.md");
  eleventyConfig.addPassthroughCopy("media");
  eleventyConfig.addPassthroughCopy("style/style.css");
  eleventyConfig.addPassthroughCopy("script/script.js");


  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.setLiquidOptions({
    dynamicPartials: true,
    strict_filters: true
  });

  eleventyConfig.setDataDeepMerge(true);

  return {
    templateFormats: [
      "md",
      "liquid"
    ],

    pathPrefix: "/iat339/",

    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
    dataTemplateEngine: "liquid",

    // These are all optional, defaults are shown:
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };




};
