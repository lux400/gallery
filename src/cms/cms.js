import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import VideoPostPreview from './preview-templates/VideoPostPreview';

CMS.registerMediaLibrary(uploadcare);
console.log(123123123);
console.log(123123123);
console.log(123123123);
console.log(123123123);
console.log(123123123);
console.log(123123123);
console.log(123123123);
console.log(123123123);
console.log(123123123);
console.log(123123123);
console.log(123123123);
console.log(123123123);
console.log(123123123);
console.log(123123123);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
CMS.registerPreviewTemplate('video', VideoPostPreview);
