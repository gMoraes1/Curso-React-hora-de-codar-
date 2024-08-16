import Item from './Item'

function List() {
return (
<>
<h1>Minha Lista
    <ul>
        <Item marca ="Ferrari" anoLancamento={1985}/>
        <Item marca ="Cv300" anoLancamento={1243}/>
        <Item marca ="Um carro"/>
    </ul>
</h1>
</>
)

}
export default List