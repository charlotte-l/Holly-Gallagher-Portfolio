export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61f2845fc5ee77b125d6300c',
                  title: 'Sanity Studio',
                  name: 'holly-gallagher-portfolio-studio',
                  apiId: '5383316d-853e-4bf1-a726-59a7bde90a0d'
                },
                {
                  buildHookId: '61f2845f4a49e2b11453747d',
                  title: 'Blog Website',
                  name: 'holly-gallagher-portfolio',
                  apiId: '5fd09942-0cb5-43bb-84f6-bbf20b89f70d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/charlotte-l/Holly-Gallagher-Portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://holly-gallagher-portfolio.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
