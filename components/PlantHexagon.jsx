function PlantHexagon() {
    return (
        <div className="m-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="268" height="268">
                <defs>
                    <pattern id="img3" patternUnits="userSpaceOnUse" width="1350" height="1100">
                        <image href="../Plants.jpeg" x="0" y="0" width="268" height="268" />
                    </pattern>
                </defs>
                <path fill="url(#img3)" d="M129 2.8867513459482a10 10 0 0 1 10 0l106.04740410711 61.226497308104a10 10 0 0 1 5 8.6602540378444l0 122.45299461621a10 10 0 0 1 -5 8.6602540378444l-106.04740410711 61.226497308104a10 10 0 0 1 -10 0l-106.04740410711 -61.226497308104a10 10 0 0 1 -5 -8.6602540378444l1.9502596430613e-13 -122.45299461621a10 10 0 0 1 5 -8.6602540378444">
                    </path>
            </svg>
        </div>
    )
}

export default PlantHexagon
