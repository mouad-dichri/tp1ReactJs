export default function StudentItem(props){

  return <button style={{
    width:200,
    marginBottom:10,
    background:props.index %2 ? 'red': 'green',
    fontSize:20,
    color:'white',
    borderRadius:7,
    border:0}}>
  
  {props.student.nom} {props.student.prenom}
  </button>
}