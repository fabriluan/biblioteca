import { CenterSt } from "./styleCenter"

const Center = ({children}) => {
    return(
        <CenterSt className="center">
            {children}
        </CenterSt>
    )
}

export default Center;