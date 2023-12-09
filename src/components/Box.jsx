import Item from './Item';
 
const Box = (props) => {
    const items =props.data.map(
        (singelData,index) => {
            return <Item removeHandler={props.removeHandler} key={index} id={index} item={singelData.item} time={singelData.time}/>
        }
    )
   
    return (
        <div className='p-3'>
         {items}
       
            
        </div>
    );
};

export default Box;
