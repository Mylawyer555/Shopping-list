
import ItemList from './ItemList'
const Content = ({ items, handleCheck, handleDelete}) => {
    return (
        <>
            {items.length ? (
                <ItemList
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ) : (<p style={{margin: "0 auto"}}>Empty List</p>)}
                
            </>
    )

}


export default Content