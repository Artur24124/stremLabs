export function prepareProductsArray(arr) {
    const products = arr.filter((product) => product.ParentID === null && !product.isDeleted)
        .map((product) => {
            product.subProducts = [];
            return product;
        });

    arr.forEach((subProduct) => {
        products.forEach((product) => {
           if (subProduct.ParentID === product.ProductID) {
               product.subProducts = [...product.subProducts, subProduct];
           }
        });
    });

    return products;


}
