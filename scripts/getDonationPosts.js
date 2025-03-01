import fs from "fs";
import path from "path";
import blogSectionTitle from "../configs/blogSectionTitles.js";

/**
 * @typedef {Object} Metadata
 * @property {string} title
 * @property {string} [summary]
 * @property {string} publishedAt
 * @property {string} [updatedAt]
 * @property {string} [image]
 * @property {string} [author]
 * @property {string} [authorImg]
 * @property {string} [authorRole]
 * @property {string} [authorLink]
 * @property {string} [category]
 */

/**
 * @param {string} fileContent
 * @returns {{ metadata: Metadata, content: string }}
 */
function parseFrontmatter(fileContent) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);
  const frontMatterBlock = match[1];
  const content = fileContent.replace(frontmatterRegex, "").trim();
  const frontMatterLines = frontMatterBlock.trim().split("\n");
  const metadata = {};

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
    metadata[key.trim()] = value;
  });

  return { metadata, content };
}

/**
 * @param {string} dir
 * @returns {string[]}
 */
function getMDXFiles(dir) {
  return fs.readdirSync(dir).filter((file) => (path.extname(file) === ".mdx" || path.extname(file) === ".md"));
}

/**
 * @param {string} filePath
 * @returns {{ metadata: Metadata, content: string }}
 */
function readMDXFile(filePath) {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

/**
 * @param {string} dir
 * @returns {Array<{ metadata: Metadata, slug: string, content: string }>}
 */
function getMDXData(dir) {
  const mdxFiles = getMDXFiles(dir);
  const mdxData = mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));
    return {
      metadata,
      slug,
      content,
    };
  });

  // 根据 blogSectionTitle 排序
  const sortedMdxData = [];
  blogSectionTitle.forEach((title) => {
    const post = mdxData.find((data) => data.slug === title);
    if (post) {
      sortedMdxData.push(post);
    }
  });

  // 将剩余的未排序的文章添加到末尾
  const remainingMdxData = mdxData.filter(
    (data) => !blogSectionTitle.includes(data.slug)
  );
  sortedMdxData.push(...remainingMdxData);

  return sortedMdxData;
}

export default function getDonationPosts() {
  return getMDXData(path.join(process.cwd(), "content/donation"));
}
