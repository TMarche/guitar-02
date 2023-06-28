function Controls() {
    return (
        <div className="w-full flex flex-row gap-10 justify-center">
            <div
                className="w-96 border-2 border-white p-2 text-white font-bold bg-white bg-opacity-20 rounded-lg
                drop-shadow backdrop-blur"
            >
                Tuning
            </div>
            <div
                className="w-96 border-2 border-white p-2 text-white font-bold bg-white bg-opacity-20 rounded-lg
                drop-shadow backdrop-blur"
            >
                Scale
            </div>
            <div
                className="w-96 border-2 border-white p-2 text-white font-bold bg-white bg-opacity-20 rounded-lg
                drop-shadow backdrop-blur"
            >
                Chord
            </div>
        </div>
    );
}
export default Controls;
