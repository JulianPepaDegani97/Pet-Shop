var trow = document.querySelectorAll(".trow")
console.log(trow)
trow = "";

var jugueteria = new Vue({
  el: '#jugueteria',
  data: {
    productos:[],
    carro:[],
    precioTotal:0,
    select: 'all',
    productosFarmacia:[],
    nombre: [],
    mascotas:[
     
      {
        img: "assets/gato5.jpg",
        alt: "Imagen de gatito"
      },
      {
        img: "assets/ave3.jpg",
        alt: "Imagen de lorito"
      },
      {
        img: "assets/cobayo1.jpg",
        alt: "Imagen de cobayo"
      },
      {
        img: "assets/conejo4.jpg",
        alt: "Imagen de conejo"
      }
    ],
    precio: '',
    descripcion: '',
    imagen: ''
  },
  computed: {
    prodFarmacia(){
      this.nombre = data.response.nombre
    },
    filter(){
      return this.productosFarmacia.filter(m => {
          if(m.nombre == this.select || this.select == 'all'){
              return m
          }
     
  })
  
}, 
filterJugueteria(){
  return this.productos.filter(m => {
      if(m.nombre == this.select || this.select == 'all'){
        
          return m
      }
 
})

}
    
    
  },
  methods: {
    remover(element){
      console.log(this.carro)
      indice = this.carro.indexOf(element)
      this.carro.splice(indice, 1)
      console.log(this.carro)
      this.precioTotal -= element.precio
      trow = ""
    return element.stock ++;
      
    },
    
 aniadirCarrito(element){
  console.log(element.nombre)
 
  
  if(element.stock != 0){
    this.carro.push(element)
    this.precioTotal += element.precio
    console.log(this.precioTotal)
    return element.stock--;
    
  }
  if(element.stock == 0){
    alert('El producto está agotado')
  }
  
 // trow.innerHTML += `<td>${element}</td>`
  
},
comprar(){
    if(this.carro.length != 0){
      alert(`¡Felicidades! Su compra se ha realizado con éxito. El monto es de $${this.precioTotal}`)
      this.carro = []
    this.precioTotal = 0
    
    }else{
      alert('Aún no ha agregado productos al carrito')
      
    }
}
  },
  created(){
    fetch('https://apipetshop.herokuapp.com/api/articulos')
.then(response => response.json())
.then(data => {
  data.response.forEach(element => {
    console.log(element.nombre)
    if(element.nombre != undefined && element.tipo == 'Juguete'){
      this.productos.push(element) 
    
    }
    if(element.nombre != undefined && element.tipo == 'Medicamento'){
      this.productosFarmacia.push(element) 
    
    }
    
  });
  
 
 /* var carrito = document.querySelectorAll(".carrito")
console.log(carrito)
var cont = 0;
  // carrito.forEach(boton => {
     console.log(boton)
    carrito.addEventListener("click", function(){
      alert("Hola");
     // return cont++;
    });
  // })*/

   
  //agregarCarrito()
 /* function carrito(){
    this.productosFarmacia.stock--;
    console.log(this.productosFarmacia.stock);
  }*/
  
})

  }
})





