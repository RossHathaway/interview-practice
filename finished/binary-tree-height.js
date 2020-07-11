
const solution = (tree) => {
    if (tree.length === 0) return 0

    let length = 0
    let countPreviousLayerNodes = 0
    let currentWidth = 1
    let readyToAddToLength = true

    for (let i = 0; i < tree.length; i++) {
        const node = tree[i]
        if (readyToAddToLength && node !== -1) {
            length++
        }
        if (countPreviousLayerNodes + currentWidth === i + 1) {
            countPreviousLayerNodes += currentWidth
            currentWidth *= 2
            readyToAddToLength = true
        } else if (readyToAddToLength && node === -1) {
            readyToAddToLength = true
        } else {
            readyToAddToLength = false
        }


    }


    return length
};

