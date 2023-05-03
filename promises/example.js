const success = true;

const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!success) reject("Hubo un error");

      resolve([
        { id: 123, name: "Product 1", price: 222 },
        { id: 124, name: "Product 2", price: 111 },
        { id: 125, name: "Product 3", price: 333 },
      ]);
    }, [3000]);
  });
};

const fetchData = async () => {
  try {
    const response = await getProducts();
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

fetchData();

console.log("Hola mundo");
