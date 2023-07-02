// document schemas
import author from './documents/author'
import category from './documents/category'
import post from './documents/post'
import project from './documents/project'
import siteSettings from './documents/siteSettings'
import engagement from './documents/engagement'

// Object types
import bodyPortableText from './objects/bodyPortableText'
import bioPortableText from './objects/bioPortableText'
import excerptPortableText from './objects/excerptPortableText'
import aboutPortableText from './objects/aboutPortableText'
import mainImage from './objects/mainImage'
import authorReference from './objects/authorReference'
import galleryImage from './objects/galleryImage'
import youtube from './objects/youtube'

// Then we give our schema to the builder and provide the result to Sanity
export default [
    siteSettings,
    engagement,
    post,
    project,
    category,
    author,
    mainImage,
    galleryImage,
    youtube,
    authorReference,
    bodyPortableText,
    bioPortableText,
    excerptPortableText,
    aboutPortableText
];
