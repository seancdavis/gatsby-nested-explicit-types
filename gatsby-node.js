exports.createSchemaCustomization = ({ actions, schema }) => {
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }

    type Frontmatter {
      title: String
      items: Item
    }

    type Item {
      name: String
      button: Button
    }

    type Button {
      label: String
      url: String
    }
  `
  actions.createTypes(typeDefs)
}
