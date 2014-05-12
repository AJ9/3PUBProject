function getText(top, left, width, height) {
    var topLeft;
    var bottomRight;
    if (document.caretRangeFromPoint) {
        topLeft = document.caretRangeFromPoint(left, top);
        bottomRight = document.caretRangeFromPoint(left + width - 1, top + height - 1);}
    else {
        return '1';} 
    if (topLeft == null) {
        return '2';}
    if (bottomRight == null) {
        return '3';}
    var textRange = document.createRange();
    textRange.setStart(topLeft.startContainer, topLeft.startOffset);
    textRange.setEnd(bottomRight.endContainer, bottomRight.endOffset);
    return textRange.toString();
}
