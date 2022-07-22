<template>
  <Layout>
    <!-- Page Header-->
    <header
      class="masthead"
      :style="{
        backgroundImage: `url(${GRIDSOME_STRAPI_SERVER_BASE_URL}${general.attributes.cover.data.attributes.url})`,
      }"
    >
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="site-heading">
              <h1>{{ general.attributes.title }}</h1>
              <span class="subheading">{{ general.attributes.subtitle }}</span>
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
            v-for="edge in $page.allStrapiPosts.edges"
            :key="edge.node.id"
          >
            <g-link :to="'/posts/' + edge.node.id">
              <h2 class="post-title">
                {{ edge.node.attributes.title }}
              </h2>
              <!-- <h3 class="post-subtitle">
                Problems look mighty small from 150 miles up
              </h3> -->
            </g-link>
            <p class="post-meta">
              Posted by
              <a href="#!">Start Bootstrap</a>
              on {{ edge.node.attributes.createdAt }}
            </p>
            <p>
              <span v-for="tag in edge.node.attributes.tags.data" :key="tag.id">
                <g-link :to="'/tags/' + tag.id">{{
                  tag.attributes.title
                }}</g-link>
                &nbsp;
              </span>
            </p>
            <!-- Divider-->
            <hr class="my-4" />
          </div>
        </div>
        <Pager :info="$page.allStrapiPosts.pageInfo" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query($page:Int){
   allStrapiPosts(perPage:2,page:$page) @paginate{
    pageInfo {
      totalPages
      currentPage
    }
    edges{
      node{
        id
        attributes{
          title
          content
          createdAt
          publishedAt
          updatedAt
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
  }

  allStrapiGeneral{
    edges{
      node{
        data{
          id
          attributes{
            title
            subtitle
            cover{
              data{
                id
                attributes{
                  url
                }
              }
            }
          }
        }
      }
    }
  }
}

</page-query>
<script>
const GRIDSOME_STRAPI_SERVER_BASE_URL =
  process.env.GRIDSOME_STRAPI_SERVER_BASE_URL;
import { Pager } from "gridsome";
export default {
  name: "HomePage",
  components: {
    Pager,
  },
  metaInfo: {
    title: "Hello, world!",
  },
  computed: {
    general() {
      return this.$page.allStrapiGeneral.edges[0].node.data;
    },
    GRIDSOME_STRAPI_SERVER_BASE_URL() {
      return GRIDSOME_STRAPI_SERVER_BASE_URL;
    },
  },
};
</script>

<style>
</style>
