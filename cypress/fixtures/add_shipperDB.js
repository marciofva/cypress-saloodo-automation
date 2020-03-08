module.exports ={
    shipper:{
        companyName: "Truck " + Math.floor(Math.random() * 10000),
        email: 'user' + Math.floor(Math.random() * 1000) +  Math.random().toString(36).slice(2) + '@hotmail.com',
        firstName: 'Rick',
        lastName: 'Sander',
        phone: '+49 643 67 79 32',
        vatId: 'GB' + Math.floor(Math.random() * 9000000000)
    }
}