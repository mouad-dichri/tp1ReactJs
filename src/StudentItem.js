export default function StudentItem(props){

  return <button style={{
    width:200,
    marginTop:10,
    background:props.index %2 ? 'rgb(0 68 140)': '#3d4f36',
    fontSize:20,
    color:'white',
    borderRadius:7,
    border:0}}>
  
  {props.student.nom} {props.student.prenom}
  </button>
}