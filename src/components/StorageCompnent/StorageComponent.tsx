import { observer } from "mobx-react-lite"
import { FC } from "react"
import { Alert, Button } from "react-bootstrap"
import { myStorage } from "../../App"
import { myBucket } from "../../App"

const Storage: FC = observer(() => {
    return <>
                {(myStorage.parrots && 
                myStorage.parrots.map(x => (<Alert>{x.name}, Price: {x.price} <Button onClick={() => myBucket.addItem(x)}>Add to Card</Button></Alert>)) )}
           </>
})

export default Storage