function flipTile(tile) {
    const tileInner = tile.querySelector('.tile-inner');
    // Toggle the flip effect when the tile is clicked
    tileInner.style.transform = tileInner.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
}