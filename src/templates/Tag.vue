<template>
  <Layout>
    <!-- Page Header-->
    <header class="masthead" style="background-image: url('img/home-bg.jpg')">
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="site-heading">
              <h1># {{ $page.strapiTags.attributes.title }}</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Main Content-->
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <!-- Post preview-->
          <div
            class="post-preview"
            v-for="post in $page.strapiTags.attributes.posts.data"
            :key="post.id"
          >
            <g-link :to="'/posts/' + post.id">
              <h2 class="post-title">
                {{ post.attributes.title }}
              </h2>
            </g-link>
            <p class="post-meta">
              Posted by
              <a href="#!">Start Bootstrap</a>
              on {{ post.attributes.createdAt }}
            </p>
            <!-- Divider-->
            <hr class="my-4" />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query($id: ID!){
  strapiTags(id: $id){
    id
    attributes{
      title
      posts{
        data{
          id
          attributes{
            title
            createdAt
          }
        }
      }
    }
  }
}
</page-query>
<script>
export default {
  name: "TagPage",

  metaInfo: {
    title: "tag",
  },
};
</script>
