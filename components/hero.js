export default function Hero() {
    return (
        <div className="bg-gradient-to-r from-primary to-primary-dark">
            <div className="py-6 text-white bg-header">
                <div className="py-10 container mx-auto flex">
                    <div className="py-10 w-3/12">
                        <h2 className="text-4xl font-bold py-4 my-6">Digital Solutions and Support</h2>
                        <p className="text-xl my-6">From a talented team of people who share your vision</p>
                        <button className="bg-secondary py-3 px-10 rounded-xl text-xl hover:bg-amber-500">Get Started Today</button>
                    </div>
                    <div className="py-10 w-8/12 flex items-center justify-end">
                            <img className="w-3/5" src="/hero-image.png" alt="kreatifit-banner"/>
                    </div>
                </div>
            </div>
        </div>
    );
}