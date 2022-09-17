import { observer } from "mobx-react-lite"
import { FC } from "react"
import { Alert, Button } from "react-bootstrap"
import { myBucket } from "../../App"

const BucketComponent: FC = observer(() => {
    return <>
                {(myBucket.parrots && 
                myBucket.parrots.map(x => (<Alert>{x.name}, Price: {x.price} <Button onClick={() => myBucket.deleteItem(x.id)}>Delete</Button></Alert>)) )}
           </>
})

export default BucketComponent