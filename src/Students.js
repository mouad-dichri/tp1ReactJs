import StudentItem from "./StudentItem";

export default function Students(){

    const students=[
        {id:0,nom:'DICHRI',prenom:'MOUAD'},
        {id:1,nom:'SALMI',prenom:'MED'},
        {id:2,nom:'ALAOUI',prenom:'AHMED'}
    ];

    return <div style={{display:'flex',flexDirection:'column'}}>
{students.map((std,idx)=>
{

    return <StudentItem key={std.id} student={std} index={idx} />
}
)}
</div>

    
}