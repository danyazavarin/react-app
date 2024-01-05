import {ways} from "../data.js";
import WayToTeach from "./WayToTeach.jsx";

export default function TeachingSection() {
    return (
        <section>
            <h3>Main text</h3>
            <ul>
                {ways.map((way, index) => <WayToTeach key={index} {...way}/>)}
            </ul>
        </section>
    )
}