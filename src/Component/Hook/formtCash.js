export function formatCash(str) {
  return str
    ?.split('')
    ?.reverse()
    ?.reduce((prev, next, index) => {
      return (index % 3 ? next : next + '.') + prev
    })
}

export function findData(cate, data) {
  const findDataProduct = data?.filter((item) => item.category === cate)

  return findDataProduct
}
