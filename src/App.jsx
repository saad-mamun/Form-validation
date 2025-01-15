import React from 'react'
import Card2 from './components/Card2';
import Api from './components/Api';


// Props er niom 

const users = [
  {
    name: "Alice Johnson",
    city: "New York",
    age: 28,
    profession: "Software Engineer",
    image: "https://example.com/images/alice.jpg",
  },
  {
    name: "Bob Smith",
    city: "Los Angeles",
    age: 35,
    profession: "Graphic Designer",
    image: "https://example.com/images/bob.jpg",
  },
  {
    name: "Clara Lee",
    city: "Chicago",
    age: 24,
    profession: "Data Analyst",
    image: "https://example.com/images/clara.jpg",
  },
  {
    name: "David Brown",
    city: "San Francisco",
    age: 42,
    profession: "Product Manager",
    image: "https://example.com/images/david.jpg",
  },
  {
    name: "Emily Davis",
    city: "Austin",
    age: 30,
    profession: "Marketing Specialist",
    image: "https://example.com/images/emily.jpg",
  },
];

const App = () => {
  return (
    <>
      {/* <div className='p-10'>
        <Card user="Liton" city="Rajshahi" age="21" />
      </div> */}
      
      {/* <div className="p-10 grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {users.map(function(elem, idx){
          return <Card2
           key={idx}
            username={elem.name} 
            age={elem.age} 
            city={elem.city} 
            profession={elem.profession}
             photo={elem.image} />
        })}
      </div> */}

      <Api/>
    </>
  );
}

export default App
