interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

// 상품 목록을 받아오기 위한 API 함수
function fetchProducts(): Promise<Project[]> {}

type ShoppingItem = Pick<Product, "id" | "name" | "price">;

function displayProductDetail(shoppingItem: ShoppingItem) {}
