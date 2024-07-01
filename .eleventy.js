module.exports = function(eleventyConfig) {
    const markdownIt = require('markdown-it');
    const markdownItAnchor = require('markdown-it-anchor');
    const markdownItAttrs = require('markdown-it-attrs');
    const { DateTime } = require("luxon");
    
    eleventyConfig.setLibrary("md", markdownIt()
			      .use(markdownItAnchor)
			      .use(markdownItAttrs)
			     );
    eleventyConfig.addPassthroughCopy("/var/www/mae.lol/gay11ty/src/images");
    eleventyConfig.addPassthroughCopy("/var/www/mae.lol/gay11ty/src/favicon.ico");
    eleventyConfig.addPassthroughCopy("/var/www/mae.lol/gay11ty/src/assets");

    eleventyConfig.addFilter("cute_date", (dateObj) => {
	return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });
    
    return {
	passthroughFileCopy: true,
	dir: {
	    input: "/var/www/mae.lol/gay11ty/src",
	    includes: "_includes",
	    data: "_data",
	    output: "/var/www/mae.lol/gaywww"
	}
    };
};
