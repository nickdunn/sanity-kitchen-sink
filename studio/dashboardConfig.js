export default {
  widgets: [
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
                  buildHookId: '62bb2bf5921f4000bcc4f30a',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-8x96whvj',
                  apiId: 'b12c76a0-41c0-46ca-8a3c-db74f22689b5'
                },
                {
                  buildHookId: '62bb2bf54083650096dc5435',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-c9p9zdaq',
                  apiId: '9953ce28-8ac0-4c3f-a33f-f127db14907d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nickdunn/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-c9p9zdaq.netlify.app', category: 'apps'}
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
