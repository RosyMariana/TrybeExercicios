const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
      const pessoa = order.order.delivery.deliveryPerson;
      const outaPessoa = order['name'];
      const telefone = order['phoneNumber'];
      const rua = order['address'].street;
      const numero = order['address'].number;
      const apartamento = order['address'].apartment;
   console.log(`Olá ${pessoa}, entrega para: ${outaPessoa}, Telefone: ${telefone}, R. ${rua}, Nº: ${numero}, AP: ${apartamento}`);
  
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
      const pessoaNova = order.name = 'Luiz Silva';
      const pizzas = Object.keys(order.order.pizza);
      const bebida = order.order.drinks.coke.type;
      const valor = order.payment.total = '50';
    console.log(`Olá ${pessoaNova}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${bebida} é ${valor},00.`);
  
  
  }
  
  orderModifier(order);