export const useCount = (headphone) => {
    const storedItems = JSON.parse(localStorage.getItem('basket'))
    const countItems = storedItems.filter((h, _) => h.id == headphone.id)
    return countItems.length
}