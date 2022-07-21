// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost',
        path: './content/blog/**/*.md',

      }
    },
    {
      use: 'gridsome-source-strapi-v4',
      options: {
        apiURL: 'http://47.111.81.139:1337/api/',
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['posts', 'tags'],
        singleTypes: ['general'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: '1758973467@qq.com',
        //   password: '123456'
        // }
      }
    }
  ],
  templates: {
    StrapiPosts: [{
      path: '/posts/:id',
      component: './src/templates/Post.vue'
    }],
    StrapiTags: [{
      path: '/tags/:id',
      component: './src/templates/Tag.vue'
    }]
  }
}
