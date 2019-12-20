print('Loading spinner...')

const spinner = extendContent(Block, "spinner", {
    update(tile){
        tile.rotation(tile.rotation() + 1)
    },
    
    draw(tile){
        Draw.rect(Core.atlas.find("router"), tile.drawx(), tile.drawy(), Time.time() * 2)
    }
})
spinner.update = true
spinner.localizedName = "Spinner"
spinner.description = "it spin"
spinner.rotate = true
spinner.category = Category.turret
spinner.buildVisibility = BuildVisibility.shown

print("Created spinner block.")
