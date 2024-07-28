let data=  [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john.doe@example.com",
      "age": 28,
      "address": {
        "street": "123 Main St",
        "city": "Anytown",
        "state": "CA",
        "zip": "12345"
      }
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "jane.smith@example.com",
      "age": 32,
      "address": {
        "street": "456 Oak St",
        "city": "Somewhere",
        "state": "NY",
        "zip": "67890"
      }
    },
    {
      "id": 3,
      "name": "Emily Johnson",
      "email": "emily.johnson@example.com",
      "age": 24,
      "address": {
        "street": "789 Pine St",
        "city": "Elsewhere",
        "state": "TX",
        "zip": "11223"
      }
    }
  ]
data.map((a)=>{
    console.log(a.address.state)
})