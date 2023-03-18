const products = [
    {
      name: "Café de especialidad",
      options: [
        { name: "Café arábica", price: 200 },
        { name: "Café Robusta", price: 250 }
      ]
    },
    {
      name: "Cafeteras",
      options: [
        { name: "Prensa francesa", price: 500 }
      ]
    },
    {
      name: "Accesorios Café",
      options: [
        { name: "Cuchara temática grano café", price: 50 },
        { name: "Filtro café", price: 20 }
      ]
    }
  ];
  
  let counter = 0;
  const selectedProducts = [];
  
  function elegirDelegacion() {
    const delOpciones = [
      "Álvaro Obregón",
      "Azcapotzalco",
      "Benito Juárez",
      "Coyoacán",
    ];
  
    const delegacion = parseInt(prompt("Selecciona la delegación en la que vives:\n\n" + delOpciones.map((option, index) => `${index + 1}. ${option}`).join("\n")));
  
    return delegacion;
  }
  
  function deliveryNo() {
    alert("Lo sentimos. No tenemos envíos disponibles en tu zona.");
  }
  
  function deliverySi() {
    alert("Sí entregamos en tu zona!");
  }
  
  function visitanos() {
    alert("Puedes visitarnos en: Insurgentes Sur 601");
  }
  
  function elegirProducto() {
    const productos = products.map(product => product.name);
    const productoIndex = parseInt(prompt("Qué producto buscas?\n\n" + productos.map((option, index) => `${index + 1}. ${option}`).join("\n"))) - 1;
    const productoSeleccionado = products[productoIndex];
  
    const opciones = productoSeleccionado.options.map((option, index) => `${index + 1}. ${option.name}`).join("\n");
    const menuOpciones = parseInt(prompt(`Escoge una opción para ${productoSeleccionado.name}:\n\n${opciones}`)) - 1;
    const opcionElegida = productoSeleccionado.options[menuOpciones];
  
    const cantidad = parseInt(prompt("Ingresa cantidad (mayor a 0):"));
    const total = opcionElegida.price * cantidad;
  
    selectedProducts.push({
      producto: productoSeleccionado.name,
      opcion: opcionElegida.name,
      cantidad,
      total
    });
  
    alert(`El total es: ${total}`);
  
    counter++;
  
    let continuarCompra = true;
  
    if (counter === 3) {
      continuarCompra = false;
    } else {
      continuarCompra = parseInt(prompt("Quieres terminar tu compra o agregar más productos?\n\n1. Terminar compra\n2. Agregar más productos")) !== 1;
    }
  
    if (continuarCompra) {
      elegirProducto();
    } else {
      let totalCompra = 0;
      selectedProducts.forEach(producto => totalCompra += producto.total);
      alert(`Gracias por tu compra!\n\nTotal: $${totalCompra}\n\nTe esperamos pronto!`);
    }
  }
  
  elegirProducto();
  