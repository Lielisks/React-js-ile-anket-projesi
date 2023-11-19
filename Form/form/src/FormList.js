import FormShow from "./FormShow";

function FormList({ infos , onDelete , onUpdate}) {
    return ( 
    <div className="form-list">
        {infos.map((info , index)=>{
            return <FormShow 
                info={info} 
                key={index}
                onDelete={onDelete}
                onUpdate={onUpdate}
                />
        })}    
    </div>
    );
}

export default FormList;