// import Layout from "@/src/components/support/Layout";
import React from "react";

const CategoryPage = () => {
  return (
    <div>CategoryPage</div>
    // <Layout>
    // </Layout>
  );
};

export default CategoryPage;

export async function getStaticProps(context) {
  console.log(context);
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: false,
  };
}
