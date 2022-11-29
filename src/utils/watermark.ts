import Jimp from 'jimp';

const getMargins = (
  image: {
    IMAGE_WIDTH: number;
    IMAGE_HIGHT: number;
  },
  logo: {
    LOGO_WIDTH: number;
    LOGO_HIGHT: number;
  },
  align: {
    VERTICAL_ALIGN: string;
    HORIZONTAL_ALIGN: string;
  },
  LOGO_MARGIN_PERCENTAGE = 0.05,
) => {
  const margin = image.IMAGE_WIDTH * LOGO_MARGIN_PERCENTAGE;
  let X: number;
  let Y: number;

  if (align.VERTICAL_ALIGN === 'center') {
    Y = (image.IMAGE_HIGHT - logo.LOGO_HIGHT) / 2;
  } else if (align.VERTICAL_ALIGN === 'top') {
    Y = margin;
  } else if (align.VERTICAL_ALIGN === 'bottom') {
    Y = image.IMAGE_HIGHT - logo.LOGO_HIGHT - margin;
  }

  if (align.HORIZONTAL_ALIGN === 'center') {
    X = (image.IMAGE_WIDTH - logo.LOGO_WIDTH) / 2;
  } else if (align.HORIZONTAL_ALIGN === 'left') {
    X = margin;
  } else if (align.HORIZONTAL_ALIGN === 'right') {
    X = image.IMAGE_WIDTH - logo.LOGO_WIDTH - margin;
  }

  return { X, Y };
};

export const createWatermark = async (data: Buffer): Promise<Buffer> => {
  const align = {
    VERTICAL_ALIGN: 'right',
    HORIZONTAL_ALIGN: 'bottom',
  };

  const OPACITY = 50;
  const SCALE_FACTOR = 50;
  try {
    const image = await Jimp.read(data);

    const url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/600px-Typescript_logo_2020.svg.png';

    const logo = await Jimp.read(url);
    logo.resize((image.bitmap.width * SCALE_FACTOR) / 100, Jimp.AUTO);

    const IMAGE_WIDTH = image.bitmap.width;
    const IMAGE_HIGHT = image.bitmap.height;
    const LOGO_WIDTH = logo.bitmap.width;
    const LOGO_HIGHT = logo.bitmap.height;

    const { X, Y } = getMargins({ IMAGE_WIDTH, IMAGE_HIGHT }, { LOGO_HIGHT, LOGO_WIDTH }, align);

    return await image
      .composite(logo, X, Y, {
        mode: Jimp.BLEND_SOURCE_OVER,
        opacityDest: 1,
        opacitySource: OPACITY / 100,
      })
      .getBufferAsync(Jimp.MIME_JPEG);
  } catch (e) {
    return data;
  }
};
