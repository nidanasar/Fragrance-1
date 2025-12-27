import {StructureResolver} from 'sanity/desk'

export const structure: StructureResolver = (S) => {
  return S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Products')
        .icon(() => '📦')
        .child(
          S.documentTypeList('product')
            .title('Products')
            .child((id) =>
              S.document().schemaType('product').documentId(id)
            )
        ),
      S.listItem()
        .title('Categories')
        .icon(() => '🏷️')
        .child(
          S.documentTypeList('category')
            .title('Categories')
            .child((id) =>
              S.document().schemaType('category').documentId(id)
            )
        ),
    ])
}