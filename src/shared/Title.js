import { useEffect } from "react"

const Title = ({ title }) => {
    useEffect(() => {
        document.title = `${title} | Polygon Energy Saving`;
    }, [title]);

    return (
        <></>
    )
}
export default Title;