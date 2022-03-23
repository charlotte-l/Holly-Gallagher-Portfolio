import S from '@sanity/desk-tool/structure-builder'
import { MdSettings } from "react-icons/md";
import { MdLightbulb } from "react-icons/md";
import { MdPerson } from "react-icons/md";

const hiddenDocTypes = listItem =>
  !['category', 'author', 'post', 'project', 'siteSettings', 'workshops'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.listItem()
        .title('Workshops')
        .icon(MdLightbulb)
        .child(
          S.editor()
            .id('workshops')
            .schemaType('workshops')
            .documentId('workshops')
      ),
      S.listItem()
        .title('Profile')
        .icon(MdPerson)
        .schemaType('author')
        .child(S.documentTypeList('author').title('Profile')),
      S.listItem()
        .title('Updates')
        .schemaType('post')
        .child(S.documentTypeList('post').title('Updates')),
      S.listItem()
        .title('Projects')
        .schemaType('project')
        .child(S.documentTypeList('project').title('Projects')),
      S.listItem()
        .title('Categories')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categories')),
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
