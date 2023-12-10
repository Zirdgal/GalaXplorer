export let materials = {
    wood: 0
}
export let materialGains = {
    wood: 0
}

export function woodIncrease() {
    materials.wood = materials.wood + materialGains.wood
}
