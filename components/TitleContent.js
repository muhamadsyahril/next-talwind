export default function TitleContent({title, content, center}) {
        return (
            <div className={`${center ? 'text-center p-30' : 'w-6/12'}`}>
                <h1 className="text-3xl font-bold">{title}</h1>
                <div className={`text-xl max-w-lg ${center ? 'p-6' : ''} p-30`}>{content}</div>
            </div>
        )
}