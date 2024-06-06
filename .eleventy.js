const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const { execSync } = require('child_process');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("code/css");
  eleventyConfig.addPassthroughCopy("code/js");
  eleventyConfig.addPassthroughCopy("code/img");
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.on('eleventy.after', () => {execSync(`npx pagefind --source docs --glob \"*/*.html\"`, { encoding: 'utf-8' })})

  return {
    dir: {
      input: "code",
      output: "docs",
    }
  }
}