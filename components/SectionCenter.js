export default function SectionCenter({ children }) {
    return (
        <div className="container mx-auto flex justify-center items-center h-96 py-10">
            { children }
        </div>
    )
}