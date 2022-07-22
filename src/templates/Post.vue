<template>
  <Layout>
    <!-- Page Header-->
    <header
      class="masthead"
      :style="{
        backgroundImage: `url(${process.env.STRAPI_SERVER_BASE_URL}${$page.strapiPosts.attributes.cover.data.attributes.url})`,
      }"
    >
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="post-heading">
              <h1>{{ $page.strapiPosts.attributes.title }}</h1>
              <!-- <h2 class="subheading">
                Problems look mighty small from 150 miles up
              </h2> -->
              <span class="meta">
                Posted by
                <a href="#!">Start Bootstrap</a>
                on {{ $page.strapiPosts.attributes.createdAt }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Post Content-->
    <article class="mb-4">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div
            class="col-md-10 col-lg-8 col-xl-7"
            v-html="mdToHtml($page.strapiPosts.attributes.content)"
          ></div>
        </div>
      </div>
    </article>
  </Layout>
</template>
<page-query>
query($id: ID!){
  strapiPosts(id: $id){
    id,
    attributes{
      createdAt
      updatedAt
      publishedAt
      title
      content
       cover{
        data{
          attributes{
            url
          }
        }
      }
      tags{
        data{
          id
          attributes{
            title
          }
        }
      }
    }
  }
}
</page-query>
<script>
import MarkDownIt from "markdown-it";
const md = new MarkDownIt();
export default {
  name: "PostPage",
  metaInfo: {
    title: "post",
  },
  computed: {},
  methods: {
    mdToHtml(mdDoc) {
      return md.render(mdDoc);
    },
  },
};
</script>
