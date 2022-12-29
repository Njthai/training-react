import './App.css';


function Appexercise(props) {
const memberslist = [{
    "id": 1,
    "first_name": "Nettle",
    "age": 49
  }, {
    "id": 2,
    "first_name": "Barney",
    "age": 40
  }, {
    "id": 3,
    "first_name": "Noak",
    "age": 45
  }, {
    "id": 4,
    "first_name": "Jamison",
    "age": 38
  }, {
    "id": 5,
    "first_name": "Janean",
    "age": 20
  }, {
    "id": 6,
    "first_name": "Saba",
    "age": 13
  }, {
    "id": 7,
    "first_name": "Syman",
    "age": 27
  }, {
    "id": 8,
    "first_name": "Zacharie",
    "age": 61
  }, {
    "id": 9,
    "first_name": "Maure",
    "age": 64
  }, {
    "id": 10,
    "first_name": "Conrade",
    "age": 46
  }
];
const filteredList = memberslist.filter((member)=>{
    return member.age < 50
})
console.log(filteredList);
const list = filteredList.map((member)=>{
  return <li>
  <p><strong>Name:</strong>{member.first_name}</p>
  <p><strong>Age:</strong>{member.age}</p>
</li>;
});
return <ul>{list}</ul>
}

export default Appexercise;
