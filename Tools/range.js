class Range {

    static range(length, start=0, interval=1) {
        return [...Array(length).keys()].map(i => i+start).map(i => i*interval)
    }

}