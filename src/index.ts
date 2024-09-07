import "./polyfill";

interface Position {
  x: number;
  y: number;
  width: number;
  height: number;
}

const getSelectedTextFrame = () => {
  for (const selectedObj of activeDocument.selection) {
    if (selectedObj.typename === "TextFrame") {
      return selectedObj as TextFrame;
    }
  }
  return null;
};

const getPositions = (textFrame: TextFrame) => {
  const duplicated = (textFrame as any).duplicate() as TextFrame;
  const textOutline = duplicated.createOutline();
  const items = [...textOutline.compoundPathItems];
  const positions: Position[][] = [];
  let chari = 0;

  for (let linei = 0; linei < textFrame.lines.length; linei++) {
    const line = textFrame.lines[linei];
    const linePositions: Position[] = [];

    for (let i = 0; i < line.length; i++) {
      const item = items.at(-chari - 1);
      if (!item) {
        break;
      }
      linePositions.push({
        x: item.left,
        y: item.top,
        width: item.width,
        height: item.height,
      });
      chari++;
    }
    positions.push(linePositions);
  }

  textOutline.remove();
  return positions;
};

const main = () => {
  const textFrame = getSelectedTextFrame();
  if (textFrame === null) {
    alert(`テキストを選択してください`);
    return false;
  }

  const left = textFrame.left;
  const width = textFrame.width;
  const positions = getPositions(textFrame);

  let lineGap = null;

  for (let i = 0; i < textFrame.lines.length; i++) {
    const line = textFrame.lines[i];
    if (line.length === 0) {
      continue;
    }

    // 行間を取得
    if (lineGap === null) {
      lineGap =
        line.characterAttributes.leading - line.characterAttributes.size;
    }

    // 文字サイズを調整
    const linePositions = positions[i];
    const lineLeft = linePositions[0].x;
    const lineRight = linePositions.at(-1)!.x + linePositions.at(-1)!.width;
    const lineWidth = lineRight - lineLeft;

    const ratio = width / lineWidth;
    const size = line.characterAttributes.size * ratio;
    line.characterAttributes.size = size;
    line.characterAttributes.autoLeading = false;
    line.characterAttributes.leading = size + lineGap;

    // 最初の文字のカーニングを調整
    line.characters[0].kerning = (((left - lineLeft) * ratio) / size) * 1000;
  }
};

main();
