import fs from 'fs';
import path from 'path';
import getDonationPosts from './getDonationPosts.js';

const posts = getDonationPosts();
const outputPath = path.join(process.cwd(), '/public/', 'donationPosts.json');

fs.writeFileSync(outputPath, JSON.stringify(posts, null, 2));

console.log('Donation posts data generated.');