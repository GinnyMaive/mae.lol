module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("/var/www/mae.lol/11ty/src/images");
    eleventyConfig.addPassthroughCopy("/var/www/mae.lol/11ty/src/favicon.ico");
    return {
	passthroughFileCopy: true,
    dir: {
      input: "/var/www/mae.lol/11ty/src",
      includes: "_includes",
      data: "_data",
      output: "/var/www/mae.lol/www"
    }
  };
};
