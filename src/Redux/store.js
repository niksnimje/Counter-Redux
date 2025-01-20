import { legacy_createStore} from "redux"
import { reducer } from "./reducer"

const insitalstate={
    counter:0
}
export const store=legacy_createStore(reducer,insitalstate)